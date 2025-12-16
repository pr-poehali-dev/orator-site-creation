'''
Business: Tracks website visitors and returns total/unique visit counts
Args: event - dict with httpMethod, headers (for session tracking)
      context - object with request_id attribute
Returns: HTTP response with visitor statistics
'''

import json
import os
import hashlib
from typing import Dict, Any
import psycopg2
from psycopg2.extras import RealDictCursor

def get_db_connection():
    database_url = os.environ.get('DATABASE_URL')
    return psycopg2.connect(database_url)

def generate_session_id(event: Dict[str, Any]) -> str:
    headers = event.get('headers', {})
    user_agent = headers.get('user-agent', headers.get('User-Agent', ''))
    source_ip = event.get('requestContext', {}).get('identity', {}).get('sourceIp', '')
    
    session_string = f"{source_ip}:{user_agent}"
    return hashlib.sha256(session_string.encode()).hexdigest()

def handler(event: Dict[str, Any], context: Any) -> Dict[str, Any]:
    method: str = event.get('httpMethod', 'GET')
    
    if method == 'OPTIONS':
        return {
            'statusCode': 200,
            'headers': {
                'Access-Control-Allow-Origin': '*',
                'Access-Control-Allow-Methods': 'GET, POST, OPTIONS',
                'Access-Control-Allow-Headers': 'Content-Type',
                'Access-Control-Max-Age': '86400'
            },
            'body': '',
            'isBase64Encoded': False
        }
    
    conn = get_db_connection()
    cur = conn.cursor(cursor_factory=RealDictCursor)
    
    if method == 'POST':
        session_id = generate_session_id(event)
        session_id_escaped = session_id.replace("'", "''")
        
        cur.execute(
            f"SELECT id, visit_count FROM visitor_sessions WHERE session_id = '{session_id_escaped}'"
        )
        existing_session = cur.fetchone()
        
        if existing_session:
            cur.execute(
                f"UPDATE visitor_sessions SET last_visit = CURRENT_TIMESTAMP, visit_count = visit_count + 1 WHERE session_id = '{session_id_escaped}'"
            )
            cur.execute(
                "UPDATE visitor_stats SET total_visits = total_visits + 1, updated_at = CURRENT_TIMESTAMP WHERE id = 1"
            )
        else:
            cur.execute(
                f"INSERT INTO visitor_sessions (session_id) VALUES ('{session_id_escaped}')"
            )
            cur.execute(
                "UPDATE visitor_stats SET total_visits = total_visits + 1, unique_visits = unique_visits + 1, updated_at = CURRENT_TIMESTAMP WHERE id = 1"
            )
        
        conn.commit()
    
    cur.execute("SELECT total_visits, unique_visits FROM visitor_stats WHERE id = 1")
    stats = cur.fetchone()
    
    cur.close()
    conn.close()
    
    result = {
        'total_visits': stats['total_visits'] if stats else 0,
        'unique_visits': stats['unique_visits'] if stats else 0
    }
    
    return {
        'statusCode': 200,
        'headers': {
            'Content-Type': 'application/json',
            'Access-Control-Allow-Origin': '*'
        },
        'isBase64Encoded': False,
        'body': json.dumps(result)
    }

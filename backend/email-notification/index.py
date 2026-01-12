import json
import os
import smtplib
from email.mime.text import MIMEText
from email.mime.multipart import MIMEMultipart
from typing import Dict, Any

def handler(event: Dict[str, Any], context: Any) -> Dict[str, Any]:
    '''
    Отправка заявок с формы на email
    Принимает: name, phone, email (опционально), message (опционально), course (опционально), date (опционально)
    Отправляет: email с данными заявки
    '''
    method: str = event.get('httpMethod', 'GET')
    
    if method == 'OPTIONS':
        return {
            'statusCode': 200,
            'headers': {
                'Access-Control-Allow-Origin': '*',
                'Access-Control-Allow-Methods': 'POST, OPTIONS',
                'Access-Control-Allow-Headers': 'Content-Type',
                'Access-Control-Max-Age': '86400'
            },
            'body': '',
            'isBase64Encoded': False
        }
    
    if method != 'POST':
        return {
            'statusCode': 405,
            'headers': {
                'Content-Type': 'application/json',
                'Access-Control-Allow-Origin': '*'
            },
            'body': json.dumps({'error': 'Method not allowed'}),
            'isBase64Encoded': False
        }
    
    try:
        body_data = json.loads(event.get('body', '{}'))
        name = body_data.get('name', '')
        phone = body_data.get('phone', '')
        email = body_data.get('email', '')
        message = body_data.get('message', '')
        course = body_data.get('course', '')
        date = body_data.get('date', '')
        
        print(f"Received form data: name={name}, phone={phone}, email={email}, course={course}, date={date}")
        
        if not name or not phone:
            print("ERROR: Name or phone is missing")
            return {
                'statusCode': 400,
                'headers': {
                    'Content-Type': 'application/json',
                    'Access-Control-Allow-Origin': '*'
                },
                'body': json.dumps({'error': 'Имя и телефон обязательны'}),
                'isBase64Encoded': False
            }
        
        smtp_host = os.environ.get('SMTP_HOST', 'smtp.gmail.com')
        smtp_port = int(os.environ.get('SMTP_PORT', '587'))
        smtp_user = os.environ.get('SMTP_USER')
        smtp_password = os.environ.get('SMTP_PASSWORD')
        recipient_email = os.environ.get('RECIPIENT_EMAIL')
        
        print(f"SMTP config: host={smtp_host}, port={smtp_port}, user={bool(smtp_user)}, recipient={bool(recipient_email)}")
        
        if not smtp_user or not smtp_password or not recipient_email:
            print("ERROR: Email credentials not configured")
            return {
                'statusCode': 500,
                'headers': {
                    'Content-Type': 'application/json',
                    'Access-Control-Allow-Origin': '*'
                },
                'body': json.dumps({'error': 'Email не настроен. Свяжитесь через WhatsApp'}),
                'isBase64Encoded': False
            }
        
        msg = MIMEMultipart('alternative')
        msg['Subject'] = '🎓 Новая заявка с сайта'
        msg['From'] = smtp_user
        msg['To'] = recipient_email
        
        if course and date:
            html_body = f"""
            <html>
            <body style="font-family: Arial, sans-serif; padding: 20px; background-color: #f5f5f5;">
                <div style="max-width: 600px; margin: 0 auto; background-color: white; padding: 30px; border-radius: 10px; box-shadow: 0 2px 10px rgba(0,0,0,0.1);">
                    <h2 style="color: #2563eb; margin-bottom: 20px;">🎓 Новая заявка на курс!</h2>
                    <div style="background-color: #f8fafc; padding: 20px; border-radius: 8px; margin-bottom: 20px;">
                        <p style="margin: 10px 0;"><strong>👤 Имя:</strong> {name}</p>
                        <p style="margin: 10px 0;"><strong>📱 Телефон:</strong> {phone}</p>
                        <p style="margin: 10px 0;"><strong>📚 Курс:</strong> {course}</p>
                        <p style="margin: 10px 0;"><strong>📅 Дата старта:</strong> {date}</p>
                    </div>
                </div>
            </body>
            </html>
            """
        else:
            html_body = f"""
            <html>
            <body style="font-family: Arial, sans-serif; padding: 20px; background-color: #f5f5f5;">
                <div style="max-width: 600px; margin: 0 auto; background-color: white; padding: 30px; border-radius: 10px; box-shadow: 0 2px 10px rgba(0,0,0,0.1);">
                    <h2 style="color: #2563eb; margin-bottom: 20px;">🎯 Новая заявка с сайта!</h2>
                    <div style="background-color: #f8fafc; padding: 20px; border-radius: 8px; margin-bottom: 20px;">
                        <p style="margin: 10px 0;"><strong>👤 Имя:</strong> {name}</p>
                        <p style="margin: 10px 0;"><strong>📱 Телефон:</strong> {phone}</p>
                        {f'<p style="margin: 10px 0;"><strong>📧 Email:</strong> {email}</p>' if email else ''}
                        {f'<p style="margin: 10px 0;"><strong>💬 Комментарий:</strong> {message}</p>' if message else ''}
                    </div>
                </div>
            </body>
            </html>
            """
        
        html_part = MIMEText(html_body, 'html', 'utf-8')
        msg.attach(html_part)
        
        print(f"Sending email to {recipient_email}...")
        
        server = smtplib.SMTP(smtp_host, smtp_port)
        server.starttls()
        server.login(smtp_user, smtp_password)
        server.send_message(msg)
        server.quit()
        
        print("SUCCESS: Email sent")
        
        return {
            'statusCode': 200,
            'headers': {
                'Content-Type': 'application/json',
                'Access-Control-Allow-Origin': '*'
            },
            'body': json.dumps({'success': True, 'message': 'Заявка успешно отправлена'}),
            'isBase64Encoded': False
        }
    
    except Exception as e:
        print(f"EXCEPTION: {str(e)}")
        import traceback
        print(f"Traceback: {traceback.format_exc()}")
        return {
            'statusCode': 500,
            'headers': {
                'Content-Type': 'application/json',
                'Access-Control-Allow-Origin': '*'
            },
            'body': json.dumps({'error': 'Ошибка отправки. Попробуйте через WhatsApp'}),
            'isBase64Encoded': False
        }

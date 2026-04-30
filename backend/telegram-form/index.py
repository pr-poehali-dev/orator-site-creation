import json
import os
import urllib.request
import smtplib
from email.mime.text import MIMEText
from email.mime.multipart import MIMEMultipart


def send_email(name, phone, course, date, message):
    smtp_user = os.environ.get('SMTP_USER')
    smtp_password = os.environ.get('SMTP_PASSWORD')
    if not smtp_user or not smtp_password:
        return False

    to_email = 's_kuzikova@mail.ru'

    body = f"""Новая заявка с сайта!

Имя: {name}
Телефон: {phone}"""

    if course:
        body += f"\nКурс: {course}"
    if date:
        body += f"\nДата: {date}"
    if message:
        body += f"\nКомментарий: {message}"

    msg = MIMEMultipart()
    msg['From'] = smtp_user
    msg['To'] = to_email
    msg['Subject'] = f'Новая заявка с сайта: {name}'
    msg.attach(MIMEText(body, 'plain', 'utf-8'))

    # Определяем SMTP сервер по домену
    domain = smtp_user.split('@')[-1].lower()
    if 'gmail' in domain:
        smtp_host, smtp_port = 'smtp.gmail.com', 465
    elif 'yandex' in domain or 'ya.ru' in domain:
        smtp_host, smtp_port = 'smtp.yandex.ru', 465
    else:
        smtp_host, smtp_port = 'smtp.mail.ru', 465

    with smtplib.SMTP_SSL(smtp_host, smtp_port) as server:
        server.login(smtp_user, smtp_password)
        server.sendmail(smtp_user, to_email, msg.as_string())
    return True


def handler(event: dict, context) -> dict:
    '''Принимает заявки с формы, отправляет в Telegram и на email s_kuzikova@mail.ru'''

    method = event.get('httpMethod', 'GET')

    if method == 'OPTIONS':
        return {
            'statusCode': 200,
            'headers': {
                'Access-Control-Allow-Origin': '*',
                'Access-Control-Allow-Methods': 'POST, OPTIONS',
                'Access-Control-Allow-Headers': 'Content-Type',
                'Access-Control-Max-Age': '86400'
            },
            'body': ''
        }

    if method != 'POST':
        return {
            'statusCode': 405,
            'headers': {'Content-Type': 'application/json', 'Access-Control-Allow-Origin': '*'},
            'body': json.dumps({'error': 'Method not allowed'})
        }

    try:
        body = json.loads(event.get('body', '{}'))
        name = body.get('name', '')
        phone = body.get('phone', '')
        message = body.get('message', '')
        course = body.get('course', '')
        date = body.get('date', '')

        if not name or not phone:
            return {
                'statusCode': 400,
                'headers': {'Content-Type': 'application/json', 'Access-Control-Allow-Origin': '*'},
                'body': json.dumps({'error': 'Имя и телефон обязательны'})
            }

        # Отправка email
        email_sent = False
        try:
            email_sent = send_email(name, phone, course, date, message)
        except Exception:
            pass

        # Отправка в Telegram
        telegram_sent = False
        bot_token = os.environ.get('TELEGRAM_BOT_TOKEN')
        chat_id = os.environ.get('TELEGRAM_CHAT_ID')

        if bot_token and chat_id:
            try:
                telegram_message = f"""🆕 Новая заявка с сайта!

👤 Имя: {name}
📱 Телефон: {phone}"""
                if course:
                    telegram_message += f"\n📚 Курс: {course}"
                if date:
                    telegram_message += f"\n📅 Дата: {date}"
                if message:
                    telegram_message += f"\n💬 Комментарий: {message}"

                url = f'https://api.telegram.org/bot{bot_token}/sendMessage'
                data = {'chat_id': chat_id, 'text': telegram_message, 'parse_mode': 'HTML'}
                req = urllib.request.Request(
                    url,
                    data=json.dumps(data).encode('utf-8'),
                    headers={'Content-Type': 'application/json'}
                )
                with urllib.request.urlopen(req, timeout=5) as response:
                    result = json.loads(response.read().decode('utf-8'))
                    telegram_sent = result.get('ok', False)
            except Exception:
                pass

        if email_sent or telegram_sent:
            return {
                'statusCode': 200,
                'headers': {'Content-Type': 'application/json', 'Access-Control-Allow-Origin': '*'},
                'body': json.dumps({'success': True, 'message': 'Заявка отправлена'})
            }
        else:
            return {
                'statusCode': 500,
                'headers': {'Content-Type': 'application/json', 'Access-Control-Allow-Origin': '*'},
                'body': json.dumps({'error': 'Не удалось отправить заявку'})
            }

    except Exception as e:
        return {
            'statusCode': 500,
            'headers': {'Content-Type': 'application/json', 'Access-Control-Allow-Origin': '*'},
            'body': json.dumps({'error': f'Ошибка сервера: {str(e)}'})
        }

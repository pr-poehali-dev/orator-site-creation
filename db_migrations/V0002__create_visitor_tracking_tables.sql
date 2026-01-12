-- Создание таблицы для статистики посещений
CREATE TABLE IF NOT EXISTS visitor_stats (
    id INTEGER PRIMARY KEY DEFAULT 1,
    total_visits INTEGER NOT NULL DEFAULT 0,
    unique_visits INTEGER NOT NULL DEFAULT 0,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    CONSTRAINT single_row CHECK (id = 1)
);

-- Создание таблицы для сессий посетителей
CREATE TABLE IF NOT EXISTS visitor_sessions (
    id SERIAL PRIMARY KEY,
    session_id VARCHAR(64) UNIQUE NOT NULL,
    first_visit TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    last_visit TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    visit_count INTEGER NOT NULL DEFAULT 1
);

-- Вставка начальной записи статистики
INSERT INTO visitor_stats (id, total_visits, unique_visits)
VALUES (1, 0, 0)
ON CONFLICT (id) DO NOTHING;

-- Создание индекса для быстрого поиска сессий
CREATE INDEX IF NOT EXISTS idx_visitor_sessions_session_id ON visitor_sessions(session_id);
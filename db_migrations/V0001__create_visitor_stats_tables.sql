-- Создание таблицы для счетчика посетителей
CREATE TABLE IF NOT EXISTS visitor_stats (
    id SERIAL PRIMARY KEY,
    total_visits INTEGER NOT NULL DEFAULT 0,
    unique_visits INTEGER NOT NULL DEFAULT 0,
    updated_at TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP
);

-- Вставка начальной записи
INSERT INTO visitor_stats (total_visits, unique_visits) VALUES (0, 0);

-- Создание таблицы для отслеживания уникальных посетителей
CREATE TABLE IF NOT EXISTS visitor_sessions (
    id SERIAL PRIMARY KEY,
    session_id VARCHAR(255) NOT NULL UNIQUE,
    first_visit TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
    last_visit TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
    visit_count INTEGER NOT NULL DEFAULT 1
);

-- Индекс для быстрого поиска по session_id
CREATE INDEX IF NOT EXISTS idx_visitor_sessions_session_id ON visitor_sessions(session_id);
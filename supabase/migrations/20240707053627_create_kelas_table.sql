-- Kelas yang ditawarkan 
CREATE TABLE IF NOT EXISTS kelas (
    class_code TEXT PRIMARY KEY NOT NULL,
    created_at TIMESTAMP DEFAULT NOW(),
    updated_at TIMESTAMP DEFAULT NOW()
);
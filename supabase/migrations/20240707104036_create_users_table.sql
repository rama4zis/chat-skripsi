CREATE TABLE IF NOT EXISTS users (
    id bigint primary key generated always as identity,
    username TEXT NOT NULL UNIQUE,
    password TEXT NOT NULL,
    name TEXT NOT NULL,
    phone TEXT NOT NULL,
    created_at timestamp default now(),
    updated_at timestamp default now()
);
create TABLE IF NOT EXISTS course (
    id bigint primary key generated always as identity,
    code text,
    name text,
    sks int,
    semester int,
    updated_at timestamptz default now(),
    created_at timestamptz default now()
);
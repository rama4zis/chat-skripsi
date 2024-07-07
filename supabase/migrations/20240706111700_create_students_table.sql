create TABLE IF NOT EXISTS students (
    id bigint primary key generated always as identity,
    name text,
    nim text,
    email text,
    phone text,
    address text,
    parent_phone text,
    status text,
    updated_at timestamptz default now(),
    created_at timestamptz default now()
);
create TABLE IF NOT EXISTS matakuliah (
    kurikulum TEXT,
    mk_code TEXT PRIMARY KEY NOT NULL,
    name text,
    sks int,
    semester int,
    updated_at timestamptz default now(),
    created_at timestamptz default now()
);
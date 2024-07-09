--Tabel KRS
CREATE TABLE IF NOT EXISTS krs (
    id bigint primary key generated always as identity,
    student_nim TEXT not null,
    class_detail bigint not null,
    grade TEXT,
    created_at timestamp default now(),
    updated_at timestamp default now(),
    FOREIGN KEY (student_nim) REFERENCES mahasiswa(nim),
    FOREIGN KEY (class_detail) REFERENCES kelas_detail(id)
);
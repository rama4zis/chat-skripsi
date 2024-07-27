CREATE TABLE nilai (
    id SERIAL PRIMARY KEY,
    student_nim TEXT NOT NULL REFERENCES mahasiswa(nim),
    class_detail bigint not null REFERENCES kelas_detail(id),
    nilai_ujian TEXT,
    nilai_tugas TEXT,
    nilai_akhir TEXT,
    created_at TIMESTAMP,
    updated_at TIMESTAMP
);
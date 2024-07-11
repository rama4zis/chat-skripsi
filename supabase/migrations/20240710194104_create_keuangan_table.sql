CREATE TABLE keuangan (
    id SERIAL PRIMARY KEY,
    student_nim TEXT NOT NULL REFERENCES mahasiswa(nim),
    spp TEXT NOT NULL,
    tunggakan TEXT NOT NULL
);

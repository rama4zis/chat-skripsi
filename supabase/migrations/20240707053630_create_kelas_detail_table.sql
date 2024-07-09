--Detail Kelas
CREATE TABLE IF NOT EXISTS kelas_detail (
    id bigint primary key generated always as identity,
    mk_code TEXT NOT NULL,
    class_code TEXT NOT NULL,
    schedule TEXT NOT NULL,
    capacity TEXT NOT NULL,
    FOREIGN KEY (mk_code) REFERENCES matakuliah(mk_code),
    FOREIGN KEY (class_code) REFERENCES kelas(class_code)
);
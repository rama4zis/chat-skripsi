-- Mahasiswa
create TABLE IF NOT EXISTS `students` (
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

-- Mata Kuliah
create TABLE IF NOT EXISTS `courses` (
    id bigint primary key generated always as identity,
    code text,
    name text,
    sks int,
    semester int,
    updated_at timestamptz default now(),
    created_at timestamptz default now()
);

-- Kelas yang ditawarkan 
CREATE TABLE IF NOT EXISTS `course_class` (
    id bigint primary key generated always as identity,
    course_id bigint not null,
    class_code text not null,
    schedule text not null,
    class_capacity int not null,
    created_at timestamp default now(),
    updated_at timestamp default now(),
    FOREIGN KEY (course_id) REFERENCES course(id)
)

-- Kartu Rencana Studi 
CREATE TABLE IF NOT EXISTS `course_selection_sheets` (
    id bigint primary key generated always as identity,
    student_id bigint not null,
    course_class_id bigint not null,
    created_at timestamp default now(),
    updated_at timestamp default now(),
    FOREIGN KEY (student_id) REFERENCES students(id),
    FOREIGN KEY (course_class_id) REFERENCES course_class(id)
)

-- Kartu Hasil Studi
CREATE TABLE IF NOT EXISTS `transcript_of_records` (
    id bigint primary key generated always as identity,
    student_id bigint not null,
    course_class_id bigint not null,
    grade text not null,
    created_at timestamp default now(),
    updated_at timestamp default now(),
    FOREIGN KEY (student_id) REFERENCES students(id),
    FOREIGN KEY (course_class_id) REFERENCES course_class(id)
)


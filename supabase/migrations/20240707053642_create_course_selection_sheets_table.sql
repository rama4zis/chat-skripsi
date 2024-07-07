CREATE TABLE IF NOT EXISTS course_selection_sheets (
    id bigint primary key generated always as identity,
    student_id bigint not null,
    course_class_id bigint not null,
    created_at timestamp default now(),
    updated_at timestamp default now(),
    FOREIGN KEY (student_id) REFERENCES students(id),
    FOREIGN KEY (course_class_id) REFERENCES course_class(id)
);
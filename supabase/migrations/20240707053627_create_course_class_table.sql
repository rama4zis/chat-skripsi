CREATE TABLE IF NOT EXISTS course_class (
    id bigint primary key generated always as identity,
    course_id bigint not null,
    class_code text not null,
    schedule text not null,
    class_capacity int not null,
    created_at timestamp default now(),
    updated_at timestamp default now(),
    FOREIGN KEY (course_id) REFERENCES course(id)
);
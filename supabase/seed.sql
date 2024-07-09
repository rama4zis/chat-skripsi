-- Student
INSERT INTO mahasiswa (name, nim, email, phone, address, parent_phone, status) VALUES
('Rama Aditya Saputra', '13.2017.1.00612', 'rama4zis@proton.me', '+62-858-5644-0266', 'Bratang Geded 3i / 14a', '+62-813-5706-2113', 'active'),
('Bob Johnson', '13.2017.1.00613', 'bob.johnson@example.com', '+62-812-3456-1001', '456 Elm St', '+62-813-3456-2001', 'active'),
('Charlie Davis', '13.2017.1.00614', 'charlie.davis@example.com', '+62-812-3456-1002', '789 Oak St', '+62-813-3456-2002', 'active'),
('Diana Evans', '13.2017.1.00615', 'diana.evans@example.com', '+62-812-3456-1003', '101 Pine St', '+62-813-3456-2003', 'active'),
('Evan Garcia', '13.2017.1.00616', 'evan.garcia@example.com', '+62-812-3456-1004', '202 Maple St', '+62-813-3456-2004', 'active'),
('Fiona Harris', '13.2017.1.00617', 'fiona.harris@example.com', '+62-812-3456-1005', '303 Birch St', '+62-813-3456-2005', 'active'),
('George Lee', '13.2017.1.00618', 'george.lee@example.com', '+62-812-3456-1006', '404 Cedar St', '+62-813-3456-2006', 'active'),
('Hannah Martin', '13.2017.1.00619', 'hannah.martin@example.com', '+62-812-3456-1007', '505 Walnut St', '+62-813-3456-2007', 'active'),
('Ian Nelson', '13.2017.1.00620', 'ian.nelson@example.com', '+62-812-3456-1008', '606 Ash St', '+62-813-3456-2008', 'active'),
('Jane O''Connor', '13.2017.1.00621', 'jane.oconnor@example.com', '+62-812-3456-1009', '707 Spruce St', '+62-813-3456-2009', 'active');

-- Insert unique course data into the course table
INSERT INTO matakuliah (kurikulum, mk_code, name, sks, semester) VALUES
('Kurikulum 2016', '16001106', 'Pancasila', 2, 3),
('Kurikulum 2021', '21000012', 'Pancasila', 2, 1),
('Kurikulum 2016', '16001411', 'Bahasa Inggris 1', 2, 1),
('Kurikulum 2021', '21000014', 'Bahasa Inggris 1', 2, 1),
('Kurikulum 2016', '16001409', 'Matematika', 3, 1),
('Kurikulum 2021', '21000016', 'Matematika', 3, 1),
('Kurikulum 2016', '16131401', 'Algoritma & pemrograman I', 3, 1),
('Kurikulum 2021', '21131001', 'Algoritma & Pemrograman Terstruktur', 3, 1),
('Kurikulum 2021', '21131002', 'Prak. Algoritma & Pemrograman Terstruktur', 1, 1),
('Kurikulum 2016', '16133201', 'Pengantar Teknologi Informasi', 2, 3),
('Kurikulum 2021', '21131003', 'Sistem & Teknologi Informasi', 2, 1),
('Kurikulum 2016', '16131403', 'Analisis Proses Bisnis', 3, 1),
('Kurikulum 2021', '21131004', 'Analisis Proses Bisnis', 3, 1),
('Kurikulum 2016', '16133106', 'Etika Profesi', 2, 3),
('Kurikulum 2021', '21131005', 'Etika Teknologi Informasi', 2, 1),
('Kurikulum 2016', '16001410', 'Fisika', 3, 1),
('Kurikulum 2021', '21000006', 'Fisika', 3, 2),
('Kurikulum 2016', '16001107', 'Kewarganegaraan', 2, 2),
('Kurikulum 2021', '21000013', 'Kewarganegaraan', 2, 2),
('Kurikulum 2016', '16002412', 'Bahasa Inggris 2', 2, 2),
('Kurikulum 2021', '21000015', 'Bahasa Inggris 2', 2, 2),
('Kurikulum 2016', '16133202', 'Sistem Informasi Manajemen', 2, 3),
('Kurikulum 2021', '21132004', 'Sistem Informasi Manajemen', 2, 2),
('Kurikulum 2016', '16133205', 'Aljabar Linier', 3, 3),
('Kurikulum 2021', '21132005', 'Aljabar & Komputasi Numerik', 3, 2),
('Kurikulum 2016', '16132401', 'Algoritma & pemrograman II', 4, 2),
('Kurikulum 2021', '21132101', 'Pemrograman Berorientasi Objek', 3, 2),
('Kurikulum 2021', '21132102', 'Prak. Pemrograman Berorientasi Objek', 1, 2),
('Kurikulum 2016', '16132402', 'Struktur Data', 3, 2),
('Kurikulum 2021', '21132103', 'Struktur Data', 3, 2),
('Kurikulum 2016', '16133403', 'Basis Data I', 4, 3),
('Kurikulum 2021', '21133001', 'Perancangan Basis Data Relasional', 3, 3),
('Kurikulum 2021', '21133002', 'Prak. Perancangan Basis Data Relasional', 1, 3),
('Kurikulum 2016', '16135201', 'Jaringan komputer', 4, 5),
('Kurikulum 2021', '21133003', 'Desain Manajemen Jaringan', 3, 3),
('Kurikulum 2021', '21133004', 'Prak. Desain Manajemen Jaringan', 1, 3),
('Kurikulum 2016', '16134201', 'Matematika Diskrit', 3, 4),
('Kurikulum 2021', '21133005', 'Matematika Diskrit & Komputasi', 3, 3),
('Kurikulum 2016', '16135206', 'Riset Operasi', 3, 5),
('Kurikulum 2021', '21133006', 'Riset Operasi', 3, 3),
('Kurikulum 2016', '16134205', 'Interaksi Manusia dan Komputer', 3, 4),
('Kurikulum 2021', '21133007', 'Interaksi Manusia dan Komputer', 2, 3),
('Kurikulum 2016', '16134204', 'Konsep E-Bisnis', 3, 4),
('Kurikulum 2021', '21133008', 'Bisnis Digital', 3, 3),
('Kurikulum 2016', '16001108', 'Bahasa Indonesia', 2, 1),
('Kurikulum 2021', '21000007', 'Bahasa Indonesia', 2, 4),
('Kurikulum 2016', '16003216', 'Kewirausahaan', 2, 3),
('Kurikulum 2021', '21000008', 'Kewirausahaan', 2, 4),
('Kurikulum 2016', '16001414', 'Konsep Teknologi', 2, 3),
('Kurikulum 2021', '21000009', 'Konsep Teknologi', 2, 4),
('Kurikulum 2016', '16001113', 'Pendidikan Karakter', 2, 1),
('Kurikulum 2021', '21000010', 'Pendidikan Karakter', 2, 4),
('Kurikulum 2016', '16134406', 'Basis Data II', 4, 4),
('Kurikulum 2021', '21534101', 'Sistem Basis Data Relasional', 3, 4),
('Kurikulum 2021', '21534102', 'Prak. Sistem Basis Data Relasional', 1, 4),
('Kurikulum 2016', '16136305', 'Corp. Infor. System Management', 3, 6),
('Kurikulum 2021', '21534103', 'Pengembangan Antarmuka Sistem', 3, 4),
('Kurikulum 2016', '16131302', 'Konsep sistem informasi', 2, 1),
('Kurikulum 2021', '21930001', 'Kecerdasan Buatan', 2, 4),
('Kurikulum 2016', '16001417', 'Pengantar Manajemen', 2, 2),
('Kurikulum 2021', '21000011', 'Pengantar Manajemen', 2, 5),
('Kurikulum 2016', '16135405', 'Analisis & Perancangan SI', 3, 5),
('Kurikulum 2021', '21135005', 'Analisis & Perancangan SI', 3, 5),
('Kurikulum 2016', '16136404', 'Statistik', 3, 6),
('Kurikulum 2021', '21135006', 'Statistik Inferensial', 3, 5),
('Kurikulum 2016', '16134403', 'Pemr. Sistem Informasi', 4, 4),
('Kurikulum 2021', '21135101', 'Pemrograman Sistem Informasi', 3, 5),
('Kurikulum 2021', '21135102', 'Prak. Pemrograman Sistem Informasi', 1, 5),
('Kurikulum 2016', '16135403', 'Rekayasa Perangkat Lunak', 3, 5),
('Kurikulum 2021', '21135103', 'Rekayasa Perangkat Lunak', 3, 5),
('Kurikulum 2016', '16135304', 'Aplikasi E-Bisnis', 3, 5),
('Kurikulum 2021', '21135104', 'Rintisan Bisnis Digital', 3, 5),
('Kurikulum 2016', '16132204', 'Kecakapan antar personal', 2, 2),
('Kurikulum 2021', '21930002', 'Mobile Programming', 2, 5),
('Kurikulum 2016', '16001101', 'Pendidikan Agama Islam', 2, 2),
('Kurikulum 2021', '21000001', 'Agama Islam', 2, 6),
('Kurikulum 2016', '16001102', 'Pendidikan Agama Katholik', 2, 2),
('Kurikulum 2021', '21000002', 'Agama Katolik', 2, 6),
('Kurikulum 2016', '16001103', 'Pendidikan Agama Kristen', 2, 2),
('Kurikulum 2021', '21000003', 'Agama Kristen', 2, 6),
('Kurikulum 2016', '16001104', 'Pendidikan Agama Hindu', 2, 2),
('Kurikulum 2021', '21000004', 'Agama Hindu', 2, 6),
('Kurikulum 2016', '16001105', 'Pendidikan Agama Budha', 2, 2),
('Kurikulum 2021', '21000005', 'Agama Buddha', 2, 6),
('Kurikulum 2016', '16006518', 'Kuliah Kerja Nyata (KKN)', 1, 6),
('Kurikulum 2021', '21136001', 'Kuliah Kerja Nyata (KKN)', 2, 6),
('Kurikulum 2016', '16138303', 'Manajemen Resiko SI / TI', 3, 8),
('Kurikulum 2021', '21136004', 'Manajemen Resiko TI', 3, 6),
('Kurikulum 2016', '16135302', 'Data Warehousing', 3, 5),
('Kurikulum 2021', '21136102', 'Data Warehousing', 3, 6),
('Kurikulum 2016', '16136202', 'Management Proyek SI', 3, 6),
('Kurikulum 2021', '21136103', 'Manajemen Proyek SI', 3, 6),
('Kurikulum 2021', '21136105', 'Pemrograman Berbasis Framework', 3, 6),
('Kurikulum 2016', '16134202', 'Sistem Informasi Akuntansi', 2, 4),
('Kurikulum 2016', '16132203', 'Teori akuntansi', 2, 2),
('Kurikulum 2021', '21136106', 'Prak. Pemrograman berbasis framework', 1, 6),
('Kurikulum 2016', '16134202', 'Sistem Informasi Akuntansi', 2, 4),
('Kurikulum 2021', '21136106', 'Prak. Pemrograman berbasis framework', 1, 6),
('Kurikulum 2016', '16136306', 'Keamanan SI / TI', 3, 6),
('Kurikulum 2021', '21136107', 'Keamanan SI/TI', 3, 6),
('Kurikulum 2016', '16137501', 'Kerja praktek', 2, 7),
('Kurikulum 2021', '21137003', 'Kerja Praktek', 2, 7),
('Kurikulum 2016', '16003415', 'Metode Penelitian Ilmiah', 2, 7),
('Kurikulum 2021', '21137004', 'Metode Penelitian Ilmiah', 2, 7),
('Kurikulum 2016', '16138301', 'Skripsi', 5, 8),
('Kurikulum 2021', '21137006', 'Proposal Skripsi', 1, 7),
('Kurikulum 2016', '16137304', 'Framework Tata Kelola IT', 3, 7),
('Kurikulum 2021', '21137007', 'Manajemen Layanan SI/TI', 3, 7),
('Kurikulum 2016', '16137305', 'Enterprise Resource Planning', 3, 7),
('Kurikulum 2021', '21137008', 'Business Intelligence', 3, 7),
('Kurikulum 2016', '16137308', 'Inovasi SI dan Teknologi Terbaru', 3, 7),
('Kurikulum 2021', '21137009', 'Perencanaan Strategis SI/TI', 3, 7),
('Kurikulum 2016', '16137306', 'Teknik Peramalan', 3, 7),
('Kurikulum 2021', '21137010', 'Teknik Peramalan', 3, 7),
('Kurikulum 2016', '16136301', 'Information Retrieval', 3, 6),
('Kurikulum 2021', '21137011', 'Information Retrieval', 3, 7),
('Kurikulum 2016', '16137302', 'Sistem Pendukung Manajemen', 3, 7),
('Kurikulum 2021', '21137012', 'Sistem Pendukung Manajemen', 3, 7),
('Kurikulum 2016', '16136303', 'Data Mining', 3, 6),
('Kurikulum 2021', '21137101', 'Data Mining', 3, 7),
('Kurikulum 2016', '16137301', 'Topik Khusus', 3, 7),
('Kurikulum 2021', '21137102', 'Sains Data', 3, 7),
('Kurikulum 2016', '16137204', 'Sistem Operasi', 2, 7),
('Kurikulum 2021', '21137105', 'Komputasi Awan', 3, 7),
('Kurikulum 2016', '16138301', 'Skripsi', 5, 8),
('Kurikulum 2021', '21138001', 'Skripsi', 5, 8),
('Kurikulum 2016', '16138302', 'Manajemen Kualitas SI / TI', 3, 8),
('Kurikulum 2021', '21138002', 'Pengukuran Kinerja SI/TI', 3, 8),
('Kurikulum 2016', '16137303', 'Audit SI / TI', 3, 7),
('Kurikulum 2021', '21138003', 'Tata Kelola & Audit SI / TI', 3, 8),
('Kurikulum 2016', '16138305', 'Rekayasa Kebutuhan', 3, 8),
('Kurikulum 2021', '21138004', 'Manajemen Kualitas P/L', 3, 8),
('Kurikulum 2016', '16138304', 'Testing dan Implementasi SI', 3, 8),
('Kurikulum 2021', '21138004', 'Manajemen Kualitas P/L', 3, 8),
('Kurikulum 2016', '16138307', 'Sistem Informasi Intelegensia', 3, 8),
('Kurikulum 2021', '21138005', 'Sistem Informasi Intelegensia', 3, 8),
('Kurikulum 2016', '16137307', 'Recommender System', 3, 7),
('Kurikulum 2021', '21138006', 'Recommender System', 3, 8),
('Kurikulum 2016', '16138306', 'Model dan Simulasi Sistem', 3, 8),
('Kurikulum 2021', '21138007', 'Model dan Simulasi Sistem', 3, 8)
ON CONFLICT (mk_code) DO NOTHING;

-- Kelas
INSERT INTO kelas (class_code) VALUES
('P'), ('P1'), ('P2'), ('P3'), ('P4'), ('P5'),
('Q'), ('Q1'), ('Q2'), ('Q3'), ('Q4'), ('Q5'), ('Q6'), ('Q7'),
('V'), ('V1'), ('V2'),
('W'), ('W1'), ('W2'),
('X');

-- Detail Kelas
INSERT INTO kelas_detail (mk_code, class_code, schedule, capacity)
VALUES
('21000006', 'P', '[{"day": "Selasa", "time": "10:00–11:40 Materi"}, {"day": "Kamis", "time": "10:00–10:50 Responsi"}]', '46/46'),
('21000006', 'P1', '[{"day": "Selasa", "time": "10:00–11:40 Materi"}, {"day": "Kamis", "time": "10:50–11:40 Responsi"}]', '45/45'),
('21000006', 'P2', '[{"day": "Selasa", "time": "10:00–11:40 Materi"}, {"day": "Kamis", "time": "10:00–10:50 Responsi"}]', '45/45'),
('21000006', 'P3', '[{"day": "Selasa", "time": "10:00–11:40 Materi"}, {"day": "Kamis", "time": "10:00–10:50 Responsi"}]', '42/45'),
('21000006', 'V', '[{"day": "Selasa", "time": "18:00–19:40 Materi"}, {"day": "Kamis", "time": "17:00–17:50 Responsi"}]', '45/45'),
('21000006', 'V1', '[{"day": "Selasa", "time": "18:00–19:40 Materi"}, {"day": "Kamis", "time": "17:00–17:50 Responsi"}]', '43/45'),
('21000006', 'V2', '[{"day": "Selasa", "time": "18:00–19:40 Materi"}, {"day": "Kamis", "time": "17:00–17:50 Responsi"}]', '41/45'),
('21000013', 'Q2', '[{"day": "Senin", "time": "14:20–16:00 Materi"}]', '50/50'),
('21000013', 'Q3', '[{"day": "Senin", "time": "14:20–16:00 Materi"}]', '50/50'),
('21000013', 'Q4', '[{"day": "Senin", "time": "14:20–16:00 Materi"}]', '50/50'),
('21000013', 'W', '[{"day": "Senin", "time": "19:50–21:30 Materi"}]', '55/55'),
('21000013', 'W1', '[{"day": "Senin", "time": "19:50–21:30 Materi"}]', '54/55'),
('21000015', 'Q', '[{"day": "Rabu", "time": "14:20–16:00 Materi"}]', '45/45'),
('21000015', 'Q1', '[{"day": "Rabu", "time": "14:20–16:00 Materi"}]', '45/45'),
('21000015', 'Q2', '[{"day": "Rabu", "time": "14:20–16:00 Materi"}]', '45/45'),
('21000015', 'Q3', '[{"day": "Rabu", "time": "14:20–16:00 Materi"}]', '45/45'),
('21000015', 'Q4', '[{"day": "Rabu", "time": "14:20–16:00 Materi"}]', '45/45'),
('21000015', 'Q5', '[{"day": "Rabu", "time": "14:20–16:00 Materi"}]', '44/45'),
('21000015', 'Q6', '[{"day": "Rabu", "time": "14:20–16:00 Materi"}]', '44/45'),
('21000015', 'Q7', '[{"day": "Rabu", "time": "14:20–16:00 Materi"}]', '44/45'),
('21000015', 'W', '[{"day": "Rabu", "time": "19:50–21:30 Materi"}]', '50/50'),
('21000015', 'W1', '[{"day": "Rabu", "time": "19:50–21:30 Materi"}]', '50/50'),
('21000015', 'W2', '[{"day": "Rabu", "time": "19:50–21:30 Materi"}]', '50/50'),
('21132004', 'P', '[{"day": "Kamis", "time": "08:00–09:40 Materi"}]', '21/25'),
('21132004', 'P1', '[{"day": "Kamis", "time": "08:00–09:40 Materi"}]', '25/25'),
('21132004', 'V', '[{"day": "Selasa", "time": "19:50–21:30 Materi"}]', '14/40'),
('21132005', 'P', '[{"day": "Jumat", "time": "08:00–10:50 Materi"}]', '25/25'),
('21132005', 'P1', '[{"day": "Jumat", "time": "08:00–10:50 Materi"}]', '19/25'),
('21132005', 'V', '[{"day": "Senin", "time": "17:00–19:40 Materi"}]', '20/40'),
('21132101', 'P', '[{"day": "Senin", "time": "08:00–10:50 Materi"}]', '25/25'),
('21132101', 'P1', '[{"day": "Senin", "time": "08:00–10:50 Materi"}]', '20/25'),
('21132101', 'V', '[{"day": "Rabu", "time": "17:00–19:40 Materi"}]', '13/40'),
('21132102', 'P', '[{"day": "Kamis", "time": "13:20–14:10 Materi"}]', '25/25'),
('21132102', 'P1', '[{"day": "Kamis", "time": "13:20–14:10 Materi"}]', '20/25'),
('21132102', 'V', '[{"day": "Jumat", "time": "19:50–20:40 Materi"}]', '13/40'),
('21132103', 'P', '[{"day": "Rabu", "time": "08:00–10:50 Materi"}]', '25/25'),
('21132103', 'P1', '[{"day": "Rabu", "time": "08:00–10:50 Materi"}]', '19/25'),
('21132103', 'V', '[{"day": "Jumat", "time": "17:00–19:40 Materi"}]', '15/40'),
('21000007', 'P2', '[{"day": "Senin", "time": "12:30–14:10 Materi"}]', '40/40'),
('21000007', 'P3', '[{"day": "Senin", "time": "12:30–14:10 Materi"}]', '39/40'),
('21000007', 'P4', '[{"day": "Senin", "time": "12:30–14:10 Materi"}]', '20/40'),
('21000007', 'P5', '[{"day": "Senin", "time": "12:30–14:10 Materi"}]', '0/0'),
('21000007', 'V', '[{"day": "Jumat", "time": "18:00–19:40 Materi"}]', '50/50'),
('21000007', 'V1', '[{"day": "Jumat", "time": "18:00–19:40 Materi"}]', '45/50'),
('21000008', 'Q', '[{"day": "Selasa", "time": "14:20–16:00 Materi"}]', '39/40'),
('21000008', 'Q1', '[{"day": "Selasa", "time": "14:20–16:00 Materi"}]', '40/40'),
('21000008', 'Q2', '[{"day": "Selasa", "time": "14:20–16:00 Materi"}]', '40/40'),
('21000008', 'Q3', '[{"day": "Selasa", "time": "14:20–16:00 Materi"}]', '40/40'),
('21000008', 'Q4', '[{"day": "Selasa", "time": "14:20–16:00 Materi"}]', '40/40'),
('21000008', 'Q5', '[{"day": "Selasa", "time": "14:20–16:00 Materi"}]', '40/40'),
('21000008', 'Q6', '[{"day": "Selasa", "time": "14:20–16:00 Materi"}]', '40/40'),
('21000008', 'Q7', '[{"day": "Selasa", "time": "14:20–16:00 Materi"}]', '36/40'),
('21000008', 'W', '[{"day": "Selasa", "time": "19:50–21:30 Materi"}]', '54/55'),
('21000008', 'W1', '[{"day": "Selasa", "time": "19:50–21:30 Materi"}]', '0/0'),
('21000009', 'P', '[{"day": "Rabu", "time": "10:00–11:40 Materi"}]', '40/40'),
('21000009', 'P1', '[{"day": "Rabu", "time": "10:00–11:40 Materi"}]', '40/40'),
('21000009', 'P2', '[{"day": "Rabu", "time": "10:00–11:40 Materi"}]', '40/40'),
('21000009', 'P3', '[{"day": "Rabu", "time": "10:00–11:40 Materi"}]', '39/40'),
('21000009', 'P4', '[{"day": "Rabu", "time": "10:00–11:40 Materi"}]', '38/40'),
('21000009', 'Q', '[{"day": "Jumat", "time": "14:20–16:00 Materi"}]', '41/45'),
('21000009', 'Q1', '[{"day": "Jumat", "time": "14:20–16:00 Materi"}]', '0/40'),
('21000009', 'Q2', '[{"day": "Jumat", "time": "14:20–16:00 Materi"}]', '0/1'),
('21000009', 'Q3', '[{"day": "Jumat", "time": "14:20–16:00 Materi"}]', '0/1'),
('21000009', 'W', '[{"day": "Jumat", "time": "19:50–21:30 Materi"}]', '45/45'),
('21000009', 'W1', '[{"day": "Jumat", "time": "19:50–21:30 Materi"}]', '47/50'),
('21000009', 'W2', '[{"day": "Jumat", "time": "19:50–21:30 Materi"}]', '45/45'),
('21000010', 'Q', '[{"day": "Kamis", "time": "14:20–16:00 Materi"}]', '40/40'),
('21000010', 'Q1', '[{"day": "Kamis", "time": "14:20–16:00 Materi"}]', '40/40'),
('21000010', 'Q2', '[{"day": "Kamis", "time": "14:20–16:00 Materi"}]', '30/40'),
('21000010', 'V', '[{"day": "Kamis", "time": "18:00–19:40 Materi"}]', '47/50'),
('21534101', 'P', '[{"day": "Selasa", "time": "08:00–10:50 Materi"}]', '40/40'),
('21534101', 'P1', '[{"day": "Selasa", "time": "08:00–10:50 Materi"}]', '23/40'),
('21534101', 'V', '[{"day": "Selasa", "time": "17:00–19:40 Materi"}]', '22/40'),
('21534102', 'P', '[{"day": "Kamis", "time": "10:50–11:40 Materi"}]', '40/40'),
('21534102', 'P1', '[{"day": "Kamis", "time": "10:50–11:40 Materi"}]', '23/40'),
('21534102', 'V', '[{"day": "Kamis", "time": "19:50–20:40 Materi"}]', '23/40'),
('21534103', 'P', '[{"day": "Senin", "time": "08:00–10:50 Materi"}]', '40/40'),
('21534103', 'P1', '[{"day": "Senin", "time": "08:00–10:50 Materi"}]', '24/40'),
('21534103', 'V', '[{"day": "Rabu", "time": "17:00–19:40 Materi"}]', '26/40'),
('21930001', 'P3', '[{"day": "Rabu", "time": "08:00–09:40 Materi"}]', '39/40'),
('21930001', 'P4', '[{"day": "Rabu", "time": "08:00–09:40 Materi"}]', '24/30'),
('21930001', 'V2', '[{"day": "Senin", "time": "19:50–21:30 Materi"}]', '36/40'),
('21000001', 'Q', '[{"day": "Jumat", "time": "14:20–16:00 Materi"}]', '40/40'),
('21000001', 'Q1', '[{"day": "Jumat", "time": "14:20–16:00 Materi"}]', '37/40'),
('21000001', 'Q2', '[{"day": "Jumat", "time": "14:20–16:00 Materi"}]', '34/40'),
('21000001', 'V', '[{"day": "Jumat", "time": "18:00–19:40 Materi"}]', '41/45'),
('21000002', 'X', '[{"day": "Jumat", "time": "18:00–19:40 Materi"}]', '15/40'),
('21000003', 'X', '[{"day": "Jumat", "time": "18:00–19:40 Materi"}]', '28/40'),
('21000004', 'X', '[{"day": "Jumat", "time": "18:00–19:40 Materi"}]', '2/40'),
('21000005', 'X', '[{"day": "Jumat", "time": "18:00–19:40 Materi"}]', '0/40'),
('21136001', 'X', '[{"day": "Bebas", "time": "00:00–23:59 Materi"}]', '89/150'),
('21136004', 'P', '[{"day": "Selasa", "time": "08:00–10:50 Materi"}]', '30/30'),
('21136004', 'Q', '[{"day": "Jumat", "time": "08:00–10:50 Materi"}]', '26/30'),
('21136004', 'V', '[{"day": "Selasa", "time": "19:50–22:20 Materi"}]', '43/43'),
('21136102', 'P', '[{"day": "Senin", "time": "08:00–10:50 Materi"}]', '29/30'),
('21136102', 'P1', '[{"day": "Senin", "time": "08:00–10:50 Materi"}]', '27/30'),
('21136102', 'V', '[{"day": "Rabu", "time": "17:00–19:40 Materi"}]', '35/40'),
('21136103', 'P', '[{"day": "Rabu", "time": "08:00–10:50 Materi"}]', '30/30'),
('21136103', 'P1', '[{"day": "Rabu", "time": "08:00–10:50 Materi"}]', '26/30'),
('21136103', 'V', '[{"day": "Kamis", "time": "17:00–19:40 Materi"}]', '25/40'),
('21136105', 'P', '[{"day": "Senin", "time": "13:20–16:00 Materi"}]', '25/30'),
('21136105', 'P1', '[{"day": "Senin", "time": "13:20–16:00 Materi"}]', '30/30'),
('21136105', 'V', '[{"day": "Selasa", "time": "17:00–19:40 Materi"}]', '21/40'),
('21136106', 'P', '[{"day": "Rabu", "time": "10:50–11:40 Materi"}]', '25/30'),
('21136106', 'P1', '[{"day": "Rabu", "time": "10:50–11:40 Materi"}]', '30/30'),
('21136106', 'V', '[{"day": "Kamis", "time": "19:50–20:40 Materi"}]', '21/40'),
('21136107', 'P', '[{"day": "Kamis", "time": "08:00–10:50 Materi"}]', '52/52'),
('21136107', 'P1', '[{"day": "Kamis", "time": "08:00–10:50 Materi"}]', '52/52'),
('21136107', 'V', '[{"day": "Senin", "time": "17:00–19:40 Materi"}]', '43/45'),
('21137003', 'X', '[{"day": "Bebas", "time": "00:00–23:59 Materi"}]', '56/150'),
('21137006', 'X', '[{"day": "Bebas", "time": "00:00–23:59 Materi"}]', '110/160'),
('21138001', 'X', '[{"day": "Bebas", "time": "00:00–23:59 Materi"}]', '142/160'),
('21138002', 'P', '[{"day": "Selasa", "time": "08:00–10:50 Materi"}]', '15/40'),
('21138002', 'V', '[{"day": "Selasa", "time": "17:00–19:40 Materi"}]', '11/40'),
('21138003', 'P', '[{"day": "Rabu", "time": "13:20–16:00 Materi"}]', '10/40'),
('21138003', 'V', '[{"day": "Jumat", "time": "17:00–19:40 Materi"}]', '37/40'),
('21138004', 'P', '[{"day": "Selasa", "time": "13:20–16:00 Materi"}]', '14/40'),
('21138004', 'V', '[{"day": "Kamis", "time": "17:00–19:40 Materi"}]', '12/40'),
('21138007', 'P', '[{"day": "Kamis", "time": "13:20–16:00 Materi"}]', '42/42'),
('21138007', 'V', '[{"day": "Senin", "time": "17:00–19:40 Materi"}]', '14/40');

INSERT INTO krs (student_nim, class_detail) VALUES
('13.2017.1.00612', '1'),
('13.2017.1.00612', '2'),
('13.2017.1.00612', '3'),
('13.2017.1.00612', '4');

INSERT INTO users (username, password, name, phone) VALUES
(
    '13.2017.1.00612', '1999-10-01', 'Rama', '085856440266'
);
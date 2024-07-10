import { Message } from 'whatsapp-web.js';
import client from '../config/whatsappClient';
import supabase from '../lib/supabaseClient';
import { Tables } from '../database.types';

let krs: Tables<'krs'>;
let kelas_detail: Tables<'kelas_detail'>;
let matakuliah: Tables<'matakuliah'>;
let mahasiswa: Tables<'mahasiswa'>;

export const handleKrsMessage = async (message: Message) => {
    const messageParts = message.body.split(' ');
    if (messageParts[0].toLowerCase() === 'cek' && messageParts[1].toLowerCase() === 'schedule' && messageParts.length === 3) {
        const nim = messageParts[2];

        const { data, error } = await supabase
            .from('krs')
            .select(`
                id,
                student_nim,
                grade,
                created_at,
                updated_at,
                mahasiswa!inner(nim, name),
                kelas_detail!inner(
                    id,
                    mk_code,
                    class_code,
                    schedule,
                    capacity,
                    matakuliah!inner(mk_code, name, sks)
                )
            `)
            .eq('student_nim', nim);

        if (error) {
            console.error('Error fetching schedule:', error);
            await client.sendMessage(message.from, 'Terjadi kesalahan saat mengambil jadwal.');
            return;
        }

        if (!data || data.length === 0) {
            await client.sendMessage(message.from, 'Jadwal tidak ditemukan.');
            return;
        }

        let scheduleMessage = '*Jadwal Kuliah*\n\n';
        data.forEach((item) => {
            const kelasDetail = item.kelas_detail as unknown as Tables<'kelas_detail'> & { matakuliah: Tables<'matakuliah'> };
            const matakuliah = kelasDetail.matakuliah;
            scheduleMessage += `Mata Kuliah: ${matakuliah.name}\n`;
            scheduleMessage += `Kode Mata Kuliah: ${matakuliah.mk_code}\n`;
            scheduleMessage += `Kode Kelas: ${kelasDetail.class_code}\n`;
            scheduleMessage += `Jadwal: ${kelasDetail.schedule}\n`;
            scheduleMessage += `Nilai: ${item.grade}\n\n`;
        });

        await client.sendMessage(message.from, scheduleMessage);
    }
};

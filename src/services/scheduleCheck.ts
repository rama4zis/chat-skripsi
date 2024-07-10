import { Message } from 'whatsapp-web.js';
import client from '../config/whatsappClient';
import supabase from '../lib/supabaseClient';
import { Tables } from '../database.types';

const handleScheduleCheckMessage = async (message: Message) => {
    // const messageParts = message.body.split(' ');
    // get number phone user 
    const userPhone = message.from.replace(/[^0-9]/g, ''); // delete all expect number
    // change 62 first to 0 
    let formattedPhone = userPhone;

    // Jika nomor telepon dimulai dengan "62", ganti dengan "0"
    if (formattedPhone.startsWith('62')) {
        formattedPhone = '0' + formattedPhone.slice(2);
    }

    console.log('Formatted phone:', formattedPhone);

    // Get nim using formattedPhone
    const { data: mahasiswaData, error: mahasiswaError } = await supabase
        .from('mahasiswa')
        .select('nim')
        .eq('phone', formattedPhone);

    if (mahasiswaError) {
        console.error('Error fetching student data:', mahasiswaError);
        await client.sendMessage(message.from, 'Terjadi kesalahan saat mencari data mahasiswa.');
        return;
    }

    if (!mahasiswaData || mahasiswaData.length === 0) {
        await client.sendMessage(message.from, 'Data mahasiswa tidak ditemukan.');
        return;
    }

    const nim = mahasiswaData[0].nim;
    console.log('NIM found:', nim);

    // get nim using formattedPhone

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

        const schedule = JSON.parse(kelasDetail.schedule);
        scheduleMessage += `Mata Kuliah: ${matakuliah.name}\n`;
        scheduleMessage += `Kode Mata Kuliah: ${matakuliah.mk_code}\n`;
        scheduleMessage += `Kode Kelas: ${kelasDetail.class_code}\n`;
        scheduleMessage += `Jadwal:\n`;
        schedule.forEach((slot: { day: string, time: string }) => {
            scheduleMessage += `${slot.day}: ${slot.time}\n`;
        });
        // Tampilkan grade jika tidak null
        if (item.grade) {
            scheduleMessage += `Nilai: ${item.grade}\n`;
        }
        scheduleMessage += '\n';
    });

    await client.sendMessage(message.from, scheduleMessage);
};

export { handleScheduleCheckMessage };

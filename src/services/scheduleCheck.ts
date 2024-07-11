import { Message } from 'whatsapp-web.js';
import client from '../config/whatsappClient';
import supabase from '../lib/supabaseClient';
import { Tables } from '../database.types';

interface ScheduleSlot {
    day: string;
    time: string;
}

const handleScheduleCheckMessage = async (message: Message) => {
    const userPhone = message.from.replace(/[^0-9]/g, ''); // Hapus semua kecuali angka
    let formattedPhone = userPhone;

    // Ubah +62 menjadi 0 untuk format lokal Indonesia
    if (formattedPhone.startsWith('62')) {
        formattedPhone = '0' + formattedPhone.slice(2);
    }

    console.log('Formatted phone:', formattedPhone);

    // Dapatkan nim menggunakan formattedPhone
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

    // Ambil jadwal kuliah berdasarkan nim
    const { data: scheduleData, error: scheduleError } = await supabase
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

    if (scheduleError) {
        console.error('Error fetching schedule:', scheduleError);
        await client.sendMessage(message.from, 'Terjadi kesalahan saat mengambil jadwal.');
        return;
    }

    if (!scheduleData || scheduleData.length === 0) {
        await client.sendMessage(message.from, 'Jadwal tidak ditemukan.');
        return;
    }

    let scheduleMessage = '*Jadwal Kuliah*\n\n';
    const today = new Date().toLocaleDateString('id-ID', { weekday: 'long' }); // Hari ini dalam format teks Bahasa Indonesia

    scheduleData.forEach((item) => {
        const kelasDetail = item.kelas_detail as unknown as Tables<'kelas_detail'> & { matakuliah: Tables<'matakuliah'> };
        const matakuliah = kelasDetail.matakuliah;
        const schedule: ScheduleSlot[] = JSON.parse(kelasDetail.schedule);
        
        // console.log('is message have today : ' + message.body.toLowerCase().includes("hari ini"));
        if (message.body.toLowerCase().includes('today') || message.body.toLowerCase().includes('hari ini') || message.body.toLowerCase().includes('sekarang')) {
            let alreadyPush: string[] = [];
            schedule.forEach((slot: { day: string, time: string }) => {
                // console.log(`hari ini "${today}" compare dengan ${slot.day.toLowerCase()}`);
                if (!alreadyPush.includes(matakuliah.name.toLowerCase()) && slot.day.toLowerCase() === today.toLowerCase()) {
                    scheduleMessage += `Mata Kuliah: ${matakuliah.name}\n`;
                    scheduleMessage += `Kode Mata Kuliah: ${matakuliah.mk_code}\n`;
                    scheduleMessage += `Kode Kelas: ${kelasDetail.class_code}\n`;
                    scheduleMessage += `Waktu: ${slot.time}\n\n`;
                    // console.log(`Mata Kuliah: ${matakuliah.name}\n`)
                    alreadyPush.push(matakuliah.name.toLowerCase())
                }
                // console.log(alreadyPush);
            });
        } else {
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
        }
    });

    await client.sendMessage(message.from, scheduleMessage);
};

export { handleScheduleCheckMessage };

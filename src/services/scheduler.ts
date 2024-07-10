// scheduler.ts

import schedule from 'node-schedule';
import { Message } from 'whatsapp-web.js';
import client from '../config/whatsappClient';
import supabase from '../lib/supabaseClient';
import { Tables } from '../database.types';

type KrsTable = Tables<'krs'>;
type KelasDetailTable = Tables<'kelas_detail'>;
type MatakuliahTable = Tables<'matakuliah'>;
type MahasiswaTable = Tables<'mahasiswa'>;


// Function to send WhatsApp message
async function sendWhatsAppMessage(to: string, text: string) {
    try {
        await client.sendMessage(to, text);
        console.log(`Message sent to ${to}: ${text}`);
    } catch (error) {
        console.error(`Error sending message to ${to}:`, error);
    }
}

// Function to check schedule and send notification 15 minutes before class starts
async function checkAndSendNotifications() {
    const now = new Date();
    const fifteenMinutesLater = new Date(now.getTime() + 15 * 60000); // 15 minutes in milliseconds

    const { data: krsData, error: krsError } = await supabase
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
        .gte('created_at', now.toISOString())
        .lte('created_at', fifteenMinutesLater.toISOString());

    if (krsError) {
        console.error('Error fetching schedule for notifications:', krsError);
        return;
    }

    if (!krsData || krsData.length === 0) {
        console.log('No classes found within the next 15 minutes.');
        return;
    }

    krsData.forEach(async (item) => {
        const kelasDetail = item.kelas_detail as KelasDetailTable & { matakuliah: MatakuliahTable };
        const matakuliah = kelasDetail.matakuliah;

        // Format jadwal sesuai dengan struktur JSON yang diberikan
        const schedule = JSON.parse(kelasDetail.schedule);
        const classStartTime = new Date(schedule[0].day + ' ' + schedule[0].time.split(' ')[0]);
        const timeDiff = classStartTime.getTime() - now.getTime();

        if (timeDiff <= 900000 && timeDiff > 0) { // 900000 milliseconds = 15 minutes
            const nim = item.student_nim;
            const message = `Halo, ${nim}! Kelas ${matakuliah.name} akan dimulai dalam 15 menit pada ${schedule[0].day} ${schedule[0].time}. Segera siapkan diri Anda.`;
            await sendWhatsAppMessage(nim, message);
        }
    });
}

// Schedule job to run every minute
schedule.scheduleJob('*/1 * * * *', async () => {
    console.log('Checking for classes starting soon...');
    await checkAndSendNotifications();
});
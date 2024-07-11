import { Message } from 'whatsapp-web.js';
import client from '../config/whatsappClient';
import supabase from '../lib/supabaseClient';
import { Tables } from '../database.types';

const handleKeuanganCheck = async (message: Message) => {
    const userPhone = message.from.replace(/[^0-9]/g, ''); // Hapus semua kecuali angka
    let formattedPhone = userPhone;

    // Ubah +62 menjadi 0 untuk format lokal Indonesia
    if (formattedPhone.startsWith('62')) {
        formattedPhone = '0' + formattedPhone.slice(2);
    }

    console.log('Formatted phone:', formattedPhone);

    // Cari data mahasiswa berdasarkan nomor telepon
    const { data: mahasiswaData, error: mahasiswaError } = await supabase
        .from('mahasiswa')
        .select('nim')
        .eq('phone', formattedPhone);

    const nim = mahasiswaData[0].nim;

    if (!nim) {
        await client.sendMessage(message.from, 'Data mahasiswa tidak ditemukan.');
        return;
    }

    // Cari data keuangan berdasarkan NIM mahasiswa
    const { data: keuanganData, error: keuanganError } = await supabase
        .from('keuangan')
        .select('*')
        .eq('student_nim', nim);

    console.log('Keuangan data:', keuanganData);

    // Siapkan pesan untuk dikirimkan kembali ke pengguna
    let resultKeuangan = 'Data Keuangan\n\n';

    if (keuanganData && keuanganData.length > 0) {
        keuanganData.forEach(keuangan => {
            const spp = parseInt(keuangan.spp);
            const tunggakan = parseInt(keuangan.tunggakan);
            const total = (spp * tunggakan) + ( spp * 0.1 * tunggakan );
            const sppRupiah =  new Intl.NumberFormat('id-ID', { style: 'currency', currency: 'IDR' }).format(spp);
            const totalRupiah =  new Intl.NumberFormat('id-ID', { style: 'currency', currency: 'IDR' }).format(total);
            resultKeuangan += `SPP ${tunggakan} bulan x Rp${sppRupiah}\nDENDA ${tunggakan} bulan x ${spp * 0.1}\n\nTOTAL Rp${totalRupiah}`;
        });
    } else {
        resultKeuangan += 'Tidak ada data keuangan.';
    }


    // Kirim pesan ke pengguna
    await client.sendMessage(message.from, resultKeuangan);
};

export { handleKeuanganCheck };

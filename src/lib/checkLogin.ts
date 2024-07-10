// import { Message } from 'whatsapp-web.js';
// import client from '../config/whatsappClient';
// import { Database } from '../database.types';
// import supabase from '../lib/supabaseClient';


// export const handleMenuMessage = async (message: Message) => {


//     let { data: krs, error } = await supabase
//         .from('krs')
//         .select('*')


//     if (message.body.toLowerCase() === 'cek schedule') {
//         // const menu = `*Menu*\n\n1. Jadwal Kuliah\n2. Kuangan\n3. Absensi\n\nReply with the number of your choice.`;
//         // await client.sendMessage(message.from, menu);
//         await client.sendMessage(message.from, krs);
//     }
// };

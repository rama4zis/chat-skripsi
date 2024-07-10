import { Message } from 'whatsapp-web.js';
import client from '../config/whatsappClient';

export const handleMenuMessage = async (message: Message) => {
    if (message.body.toLowerCase() === 'menu') {
        const menu = `*Menu*\n\n1. Jadwal Kuliah\n2. Kuangan\n3. Absensi\n\nReply with the number of your choice.`;
        await client.sendMessage(message.from, menu);
    }
};

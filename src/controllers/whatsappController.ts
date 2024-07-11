import { Request, Response } from 'express';
import client from '../config/whatsappClient';

const sendMessage = async (req: Request, res: Response) => {
    // const { number, message } = req.body;

    // let number = req.params.number;
    // if (number.startsWith('0')) {
    //     number = '62' + number.slice(1);
    // }

    // try {
    //     const chatId = `${number}@c.us`;
    //     await client.sendMessage(chatId, 'Absen berhasil');
    //     res.status(200).json({ message: 'Message sent successfully' });
    // } catch (error) {
    //     res.status(500).json({ error: 'Failed to send message sssss' });
    // }
};

const handleAbsen = async (req: Request, res: Response) => {
    console.log(req.params);
    const number = req.params.phone;
    let formattedPhone = number;
    if (formattedPhone.startsWith('0')) {
        formattedPhone = '62' + formattedPhone.slice(1);
    }

    try {
        const chatId = `${formattedPhone}@c.us`;
        await client.sendMessage(chatId, 'Absen berhasil');
        res.status(200).json({ message: 'Message sent successfully' });
    } catch (error) {
        res.status(500).json({ error: 'Failed to send message sssss' });
    }
};

export { sendMessage, handleAbsen };
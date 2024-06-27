import { Request, Response } from 'express';
import client from '../config/whatsappClient';

export const sendMessage = async (req: Request, res: Response) => {
    const { number, message } = req.body;

    try {
        const chatId = `${number}@c.us`;
        await client.sendMessage(chatId, message);
        res.status(200).json({ message: 'Message sent successfully' });
    } catch (error) {
        res.status(500).json({ error: 'Failed to send message sssss' });
    }
};

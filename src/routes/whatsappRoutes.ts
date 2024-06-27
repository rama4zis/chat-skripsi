import { Router } from 'express';
import { sendMessage } from '../controllers/whatsappController';

const router = Router();

router.get('/', (req, res) => {
    res.status(200).json({ message: 'berhasil' });
});

router.post('/send-message', sendMessage);

export default router;

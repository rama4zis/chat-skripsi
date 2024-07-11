import { Router } from 'express';
import { sendMessage, handleAbsen } from '../controllers/whatsappController';

const router = Router();

router.get('/', (req, res) => {
    res.status(200).json({ message: 'berhasil' });
});

router.get('/absen/:phone', handleAbsen);

export default router;

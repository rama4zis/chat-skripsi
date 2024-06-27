import express from 'express';
import dotenv from 'dotenv';
import whatsappRoutes from './routes/whatsappRoutes';

dotenv.config();

const app = express();
app.use(express.json());

app.use('/api', whatsappRoutes);

export default app;

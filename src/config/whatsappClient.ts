import { Client, NoAuth, LocalAuth, Message } from 'whatsapp-web.js';
import qrcode from 'qrcode-terminal';
import { handleMenuMessage } from '../services/menuService';
import { handleKrsMessage } from '../services/scheduleCheck';

// old link 
// https://raw.githubusercontent.com/wppconnect-team/wa-version/renovate/prettier-3.x/html/2.2412.54.html

const client = new Client({
    // authStrategy: new NoAuth(), // To skip the authentication process
    authStrategy: new LocalAuth(), // To use local authentication
    puppeteer: {
        headless: true,
        args: [ '--no-sandbox' ],
    },
    // webVersionCache: {
    //     type: "remote",
    //     remotePath:
    //         "https://raw.githubusercontent.com/wppconnect-team/wa-version/renovate/prettier-3.x/html/2.2412.54.html",
    // },
});


client.on('qr', (qr) => {
    qrcode.generate(qr, { small: true });
});

client.on('ready', () => {
    console.log('Client is ready!');
});

client.on('message', async (message: Message) => {
    console.log(`Received message: ${message.body}`);

    // Handle cek krs 
    await handleKrsMessage(message);

    // Handle menu response
    // await handleMenuMessage(message);
});


client.on('message', msg => {
    if (msg.body == '!ping') {
        msg.reply('pong');
    }
});

client.initialize();

export default client;

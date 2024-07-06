import { Client, NoAuth, LocalAuth, Message } from 'whatsapp-web.js';
import qrcode from 'qrcode-terminal';
import { handleMenuMessage } from '../services/menuService';

const client = new Client({
    authStrategy: new LocalAuth(),
    puppeteer: { args: ['--no-sandbox', '--disable-setuid-sandbox'] },
    webVersionCache: {
        type: "remote",
        remotePath:
            "https://raw.githubusercontent.com/wppconnect-team/wa-version/main/html/2.2412.54.html",
    },

});

client.on('qr', (qr) => {
    qrcode.generate(qr, { small: true });
});

client.on('ready', () => {
    console.log('Client is ready!');
});

client.on('message', async (message: Message) => {
    console.log(`Received message: ${message.body}`);

    // Handle menu response
    await handleMenuMessage(message);
});


client.on('message', msg => {
    if (msg.body == '!ping') {
        msg.reply('pong');
    }
});

client.initialize();

export default client;

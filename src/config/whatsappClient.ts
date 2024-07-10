import { Client, NoAuth, LocalAuth, Message } from 'whatsapp-web.js';
import qrcode from 'qrcode-terminal';
import { handleMenuMessage } from '../services/menuService';
import { handleScheduleCheckMessage } from '../services/scheduleCheck';
import jaroWinkler from 'jaro-winkler';

// old link 
// https://raw.githubusercontent.com/wppconnect-team/wa-version/renovate/prettier-3.x/html/2.2412.54.html

const client = new Client({
    // authStrategy: new NoAuth(), // To skip the authentication process
    authStrategy: new LocalAuth(), // To use local authentication
    puppeteer: {
        headless: true,
        args: ['--no-sandbox'],
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

const splitWords = (str: string) => {
    return str.toLowerCase().split(' ').filter(word => word);
};

const isCommandMatch = (input: string, command: string): boolean => {
    const inputWords = splitWords(input);
    const commandWords = splitWords(command);

    const highScoreWords: string[] = [];

    inputWords.forEach(inputWord => {
        commandWords.forEach(commandWord => {
            const score = jaroWinkler(inputWord, commandWord);
            // console.log('word = ', inputWord, '| compare = ', commandWord, '| score = ', score)
            if (score > 0.85) {
                highScoreWords.push(inputWord);
            }
        });
    });

    console.log('highScoreWords = ', highScoreWords)

    // Check if high score words match the command words
    let allMatch = false;
    highScoreWords.forEach(highScoreWord => {
        let matchFound = false;
        commandWords.forEach(commandWord => {
            const score = jaroWinkler(highScoreWord, commandWord);
            // console.log('word = ', highScoreWord, '| compare = ', commandWord, '| score = ', score)
            if (score > 0.85) {
                matchFound = true;
            }
        });

        if (matchFound) {
            allMatch = true;
        }
    });
    // console.log('allMatch = ', allMatch)
    return allMatch;
};

client.on('message', async (message: Message) => {
    console.log(message);
    console.log(`Received message: ${message.body}`);

    const command = 'cek schedule';

    switch (true) {
        case isCommandMatch(message.body, command):
            console.log('Masuk ke cek skedul')
            await handleScheduleCheckMessage(message);
            break;
        case isCommandMatch(message.body.toLowerCase(), '!ping'):
            message.reply('pong');
            break;
        default:
            await handleMenuMessage(message);
            break;
    }
});

client.initialize();

export default client;


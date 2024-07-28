import { Client, NoAuth, LocalAuth, Message } from 'whatsapp-web.js';
import qrcode from 'qrcode-terminal';
import { handleMenuMessage } from '../services/menuService';
import { handleScheduleCheckMessage } from '../services/scheduleCheck';
import { handleKeuanganCheck } from '../services/keuanganCheck';
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

    const highScoreWords: { word: string, score: number }[] = [];
    let totalScore = 0;

    inputWords.forEach(inputWord => {
        commandWords.forEach(commandWord => {
            const score = jaroWinkler(inputWord, commandWord);
            // console.log(`Score for "${inputWord}" and "${commandWord}": ${score}`)
            if (score > 0.85) {
                highScoreWords.push({ word: inputWord, score });
                totalScore += score;
            }
        });
    });

    let allMatch = 0;
    highScoreWords.forEach(word => {
        
        commandWords.forEach(commandWord => {
            const score = jaroWinkler(word.word, commandWord);
            if (score > 0.85) {
                allMatch++;
            }
        });
    });

    // get average 
    if ( (allMatch / commandWords.length) > 0.85 ){
        return true;
    } else {
        return false;
    }
};



client.on('message', async (message: Message) => {
    console.log(`Received message: ${message.body}`);
    // await client.sendMessage(message.from, 'Baiklah, saya akan menjawab pertanyaan Anda.\n');

    switch (true) {
        case isCommandMatch(message.body, 'cek schedule'):
            console.log('Masuk ke cek skedul');
            await handleScheduleCheckMessage(message);
            break;
        case isCommandMatch(message.body.toLowerCase(), 'cek keuangan'):
            console.log('Masuk ke cek keuangan');
            await handleKeuanganCheck(message);
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


import { Message } from 'whatsapp-web.js';
import client from '../config/whatsappClient';
import jaroWinkler from 'jaro-winkler';

const handleMenuMessage = async (message: Message) => {
    const text = message.body.toLowerCase();

    switch (true) {
        case isCommandMatch(text, 'kalender'):
            await client.sendMessage(message.from, 'Kamu bisa lihat kalender akademik di sini \n\nhttps://goo.by/xlnTkw');
            break;
        case isCommandMatch(text, 'halo'):
            await client.sendMessage(message.from, 'Hai, salam kenal. Aku robot yang bakal memandu kamu buat berselancar di sini');
            break;
        case isCommandMatch(text, 'kamu siapa'):
            await client.sendMessage(message.from, 'Aku robot pemandu di sini. Salam');
            break;
        case isCommandMatch(text, 'makasi'):
            await client.sendMessage(message.from, 'Terimakasih kembali');
            break;
        case isCommandMatch(text, 'oke'):
            await client.sendMessage(message.from, 'SIAPPPP!!!');
            break;
        case isCommandMatch(text, 'sepertinya aku kurang memahami bahasamu. aku harap pembahasan kita tetap pada lingkup akademis saja'):
            await client.sendMessage(message.from, 'Sepertinya aku kurang memahami bahasamu. Aku harap pembahasan kita tetap pada lingkup akademis saja');
            break;
        case isCommandMatch(text, 'aku mau cek'):
            await client.sendMessage(message.from, 'Ingin mengecek apa, "schedule", "keuangan" atau "khs"?');
            break;
        case isCommandMatch(text, 'apa tujuanmu'):
            await client.sendMessage(message.from, 'Untuk mempermudah pencarian informasi');
            break;
        case isCommandMatch(text, 'robot apa kamu'):
            await client.sendMessage(message.from, 'Aku adalah robot yang dapat membantumu untuk mencari informasi akademik');
            break;
        case isCommandMatch(text, 'apa keuntungan menggunakanmu'):
            await client.sendMessage(message.from, 'Jangan khawatir. Kamu akan mendapatkan informasi yang cepat dan akurat, tentu saja tidak perlu ribet juga');
            break;
        default:
            await client.sendMessage(message.from, 'selemat datang kembali, Sebelumnya mohon maaf');
            await client.sendMessage(message.from, 'Maaf, aku tidak mengerti pesanmu. Silakan coba lagi.');
            break;
    }
};

const isCommandMatch = (input: string, command: string): boolean => {
    // Fungsi yang sama untuk membandingkan input dengan command
    const inputWords = splitWords(input);
    const commandWords = splitWords(command);

    const highScoreWords: { word: string, score: number }[] = [];
    let totalScore = 0;

    inputWords.forEach(inputWord => {
        commandWords.forEach(commandWord => {
            const score = jaroWinkler(inputWord, commandWord);
            console.log(`Score for "${inputWord}" and "${commandWord}": ${score}`)
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

    return (allMatch / commandWords.length) > 0.85;
};

const splitWords = (str: string) => {
    return str.toLowerCase().split(' ').filter(word => word);
};

export { handleMenuMessage };

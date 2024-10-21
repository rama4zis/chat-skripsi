function jaroWinkler(s1: string, s2: string): number {
    const jaroDistance = (s1: string, s2: string): number => {
        const len1 = s1.length;
        const len2 = s2.length;

        if (len1 === 0) return len2 === 0 ? 1 : 0;

        const matchDistance = Math.floor(Math.max(len1, len2) / 2) - 1;
        const s1Matches = new Array(len1).fill(false);
        const s2Matches = new Array(len2).fill(false);

        let matches = 0;

        for (let i = 0; i < len1; i++) {
            const start = Math.max(0, i - matchDistance);
            const end = Math.min(i + matchDistance + 1, len2);

            for (let j = start; j < end; j++) {
                if (s2Matches[j]) continue;
                if (s1[i] !== s2[j]) continue;

                s1Matches[i] = true;
                s2Matches[j] = true;
                matches++;
                break;
            }
        }

        if (matches === 0) return 0;

        let t = 0;
        let point = 0;

        for (let i = 0; i < len1; i++) {
            if (!s1Matches[i]) continue;
            while (!s2Matches[point]) point++;
            if (s1[i] !== s2[point]) t++;
            point++;
        }

        t /= 2;

        return (
            (matches / len1 +
                matches / len2 +
                (matches - t) / matches) /3
        );
    };

    const jaro = jaroDistance(s1, s2);
    const prefixLength = Math.min(s1.length, s2.length, 4);
    let prefix = 0;

    for (let i = 0; i < prefixLength; i++) {
        if (s1[i] === s2[i]) {
            prefix++;
        } else {
            break;
        }
    }

    return jaro + (prefix * 0.1 * (1 - jaro));
}


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
            console.log(`Score for "${inputWord}" and "${commandWord}": ${score}`)
            if (score >= 0.78) {
                highScoreWords.push({ word: inputWord, score });
                totalScore += score;
            }
        });
    });

    let allMatch = 0;
    highScoreWords.forEach(word => {

        commandWords.forEach(commandWord => {
            const score = jaroWinkler(word.word, commandWord);
            if (score >= 0.78) {
                allMatch++;
            }
        });
    });

    // console.log('total score now = ', totalScore)
    // console.log('total commandWords = ', commandWords.length)
    console.log('average total score = ', totalScore / commandWords.length)

    // get average 
    // console.log('totalScore = ', totalScore)
    if ((totalScore / commandWords.length) > 0.85) {
        return true;
    } else {
        return false;
    }
};

const tableData = [
    ["Aku ingin csk kelas nanti", "CEK KELAS"],
    ["kpn yah jadal kuliahku?", "JADWAL KULIAH"],
    ["bisa tolong cek keuangan saya?", "CEK KEUANGAN"],
    ["gua perlu info nislai semester ini", "CEK NILAI"],
    ["cek status khs gw dong", "CEK KHS"],
    ["gw mau menurus cuti, gimana caranya?", "MENGURUS CUTI"],
    ["apa syarat dafftar ulang tahun ini?", "SYARAT DAFTAR ULANG"],
    ["kapan sih kalendesr akademik rilis?", "KALENDER AKADEMIK"],
    ["bisa bantu cek kelas yang available?", "CEK KELAS"],
    ["syart dftar ulang tahun depan apa aja?", "SYARAT DAFTAR ULANG"],
    ["stats keungn ku cek dong", "CEK KEUANGAN"],
    ["boleh tau jadwl kuliax?", "JADWAL KULIAH"],
    ["nilai2ku gmn nih?", "CEK NILAI"],
    ["minta cek data khs semester lalu ya", "CEK KHS"],
    ["gmn cara urus cuti semester ini?", "MENGURUS CUTI"],
    ["Aku mau lihat jadwal kuliah", "JADWAL KULIAH"],
    ["Tolong cek kalender akademik", "KALENDER AKADEMIK"],
    ["Aku pengen cek nilai", "CEK NILAI"],
    ["Cek uang kuliah dong", "CEK KEUANGAN"],
    ["Bagaimana cara mengurus cuti?", "MENGURUS CUTI"],
    ["Syart daftar ulang apa aja?", "SYARAT DAFTAR ULANG"],
    ["Jaadwal kuliaah hari ini apa?", "JADWAL KULIAH"],
    ["Kapan jadwal klender akademik keluar?", "KALENDER AKADEMIK"],
    ["Info keuangan kampus dong", "CEK KEUANGAN"],
    ["check nilai semester ini apa aja?", "CEK NILAI"],
    ["Boleh cek khs semester kemarin?", "CEK KHS"],
    ["Aku perlu info cuti", "MENGURUS CUTI"],
    ["Syarat dadtar ulsng yang baru apa?", "SYARAT DAFTAR ULANG"],
    ["Bisa cek status klas?", "CEK KELAS"],
    ["Jawal kuliah minggu ini apa?", "JADWAL KULIAH"]
]

// for (let i = 0; i < tableData.length; i++) {
//     console.log(`No ${i+1} | Input: ${tableData[i][0]}, Command yang Dicocokkan: ${tableData[i][1]}`);
//     isCommandMatch(tableData[i][0], tableData[i][1]);
// }
console.log(isCommandMatch('csk kelas', 'cek kelas'));




// console.log("asdasd");

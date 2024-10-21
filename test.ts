function jaroWinkler(s1: string, s2: string) {
    const s1_len = s1.length;
    const s2_len = s2.length;

    if (s1_len === 0 || s2_len === 0) {
        return 0.0;
    }

    const matchWindow = Math.max(s1_len, s2_len) // 2 - 1;

    const s1_matches = new Array(s1_len).fill(false);
    const s2_matches = new Array(s2_len).fill(false);

    let matches = 0;

    // Step 1: Count matches
    for (let i = 0; i < s1_len; i++) {
        const start = Math.max(0, i - matchWindow);
        const end = Math.min(s2_len, i + matchWindow + 1);

        for (let j = start; j < end; j++) {
            if (!s2_matches[j] && s1[i] === s2[j]) {
                s1_matches[i] = true;
                s2_matches[j] = true;
                matches++;
                break;
            }
        }
    }

    if (matches === 0) {
        return 0.0;
    }

    // Step 2: Calculate transpositions
    let s1_transpositions = 0;
    let point = 0;

    for (let i = 0; i < s1_len; i++) {
        if (s1_matches[i]) {
            while (!s2_matches[point]) {
                point++;
            }
            if (s1[i] !== s2[point]) {
                s1_transpositions++;
            }
            point++;
        }
    }

    // Step 3: Calculate Jaro similarity
    const jaro_similarity = (matches / s1_len + matches / s2_len + (matches - s1_transpositions / 2) / matches) / 3;

    // Step 4: Calculate Jaro-Winkler similarity with prefix scaling
    let prefix_length = 0;
    for (let i = 0; i < Math.min(4, Math.min(s1_len, s2_len)); i++) {
        if (s1[i] === s2[i]) {
            prefix_length++;
        } else {
            break;
        }
    }

    const jaro_winkler_similarity = jaro_similarity + (prefix_length * 0.1 * (1 - jaro_similarity));

    return Math.round(jaro_winkler_similarity*100)/100;
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
            // console.log(`Score for "${inputWord}" and "${commandWord}": ${score}`)
            if (score >= 0.80) {
                highScoreWords.push({ word: inputWord, score });
                totalScore += score;
            }
        });
    });

    let allMatch = 0;
    highScoreWords.forEach(word => {
        
        commandWords.forEach(commandWord => {
            const score = jaroWinkler(word.word, commandWord);
            if (score >= 0.80) {
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

for (let i = 0; i < tableData.length; i++) {
    console.log(`No ${i+1} | Input: ${tableData[i][0]}, Command yang Dicocokkan: ${tableData[i][1]}`);
    isCommandMatch(tableData[i][0], tableData[i][1]);
}
    // console.log(isCommandMatch('Aku ingin csk kelas nanti', 'CEK kelas'));




// console.log("asdasd");

interface typedItem {
    type: string;
    title: string;
}

const hourWords: string[] = [
    "eins", "zwei", "drei", "vier", "fünf", "sechs",
    "sieben", "acht", "neun", "zehn", "elf", "zwölf"
];
const timeWords: string[] = [
    "fünf", "zehn", "zwanzig",
    "um", "vor", "nach",
    "viertel", "halb", "dreiviertel",
];
export const hourItems: typedItem[] = hourWords.map(hour => ({type: "hour", title: hour}));
export const timeItems: typedItem[] = timeWords.map(time => ({type: "time", title: time}));

const getHourWord = (date: Date, offset: number = 0): typedItem => {
    const hour = (date.getHours() + offset) % 12;

    return hourItems[hour === 0 ? 11 : hour - 1];
};

const getTimeWords = (titles: string[]): typedItem[] => timeItems.filter(item => titles.includes(item.title));

export const timeInWords = (date: Date): typedItem[] => {
    switch (date.getMinutes()) {
        case 58:
        case 59:
            return [...getTimeWords(["um"]), getHourWord(date, 1)];
        case 0:
        case 1:
        case 2:
            return [...getTimeWords(["um"]), getHourWord(date)];
        case 3:
        case 4:
        case 5:
        case 6:
        case 7:
            return [...getTimeWords(["fünf", "nach"]), getHourWord(date)];
        case 8:
        case 9:
        case 10:
        case 11:
        case 12:
            return [...getTimeWords(["zehn", "nach"]), getHourWord(date)];
        case 13:
        case 14:
        case 15:
        case 16:
        case 17:
            return [...getTimeWords(["viertel"]), getHourWord(date, 1)];
        case 18:
        case 19:
        case 20:
        case 21:
        case 22:
            return [...getTimeWords(["zwanzig", "nach"]), getHourWord(date)];
        case 23:
        case 24:
        case 25:
        case 26:
        case 27:
            return [...getTimeWords(["fünf", "vor", "halb"]), getHourWord(date, 1)];
        case 28:
        case 29:
        case 30:
        case 31:
        case 32:
            return [...getTimeWords(["halb"]), getHourWord(date, 1)];
        case 33:
        case 34:
        case 35:
        case 36:
        case 37:
            return [...getTimeWords(["fünf", "nach", "halb"]), getHourWord(date, 1)];
        case 38:
        case 39:
        case 40:
        case 41:
        case 42:
            return [...getTimeWords(["zwanzig", "vor"]), getHourWord(date, 1)];
        case 43:
        case 44:
        case 45:
        case 46:
        case 47:
            return [...getTimeWords(["dreiviertel"]), getHourWord(date, 1)];
        case 48:
        case 49:
        case 50:
        case 51:
        case 52:
            return [...getTimeWords(["zehn", "vor"]), getHourWord(date, 1)];
        case 53:
        case 54:
        case 55:
        case 56:
        case 57:
            return [...getTimeWords(["fünf", "vor"]), getHourWord(date, 1)];
    }
};

export default timeInWords;

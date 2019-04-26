import ItemInterface from './items/ItemInterface';
import hourItems from './items/hourItems';
import timeItems from './items/timeItems';

const hourAsWord = (date: Date, offset: number = 0): ItemInterface => {
    const hour = (date.getHours() + offset) % 12;

    return hourItems[hour === 0 ? 11 : hour - 1];
};
const minuteAsWords = (titles: string[]): ItemInterface[] => timeItems.filter(
    (item): boolean => titles.includes(item.title),
);

export const timeAsWords = (date: Date): ItemInterface[] => {
    const minutes = date.getMinutes();

    if (minutes >= 0 && minutes <= 2) {
        return [...minuteAsWords(['um']), hourAsWord(date)];
    }
    if (minutes >= 3 && minutes <= 7) {
        return [...minuteAsWords(['fünf', 'nach']), hourAsWord(date)];
    }
    if (minutes >= 8 && minutes <= 12) {
        return [...minuteAsWords(['zehn', 'nach']), hourAsWord(date)];
    }
    if (minutes >= 13 && minutes <= 17) {
        return [...minuteAsWords(['viertel']), hourAsWord(date, 1)];
    }
    if (minutes >= 18 && minutes <= 22) {
        return [...minuteAsWords(['zwanzig', 'nach']), hourAsWord(date)];
    }
    if (minutes >= 23 && minutes <= 27) {
        return [...minuteAsWords(['fünf', 'vor', 'halb']), hourAsWord(date, 1)];
    }
    if (minutes >= 28 && minutes <= 32) {
        return [...minuteAsWords(['halb']), hourAsWord(date, 1)];
    }
    if (minutes >= 33 && minutes <= 37) {
        return [...minuteAsWords(['fünf', 'nach', 'halb']), hourAsWord(date, 1)];
    }
    if (minutes >= 38 && minutes <= 42) {
        return [...minuteAsWords(['zwanzig', 'vor']), hourAsWord(date, 1)];
    }
    if (minutes >= 43 && minutes <= 47) {
        return [...minuteAsWords(['dreiviertel']), hourAsWord(date, 1)];
    }
    if (minutes >= 48 && minutes <= 52) {
        return [...minuteAsWords(['zehn', 'vor']), hourAsWord(date, 1)];
    }
    if (minutes >= 53 && minutes <= 57) {
        return [...minuteAsWords(['fünf', 'vor']), hourAsWord(date, 1)];
    }

    return [...minuteAsWords(['um']), hourAsWord(date, 1)];
};

export default timeAsWords;

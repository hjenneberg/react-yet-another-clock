import ItemInterface from './Items/ItemInterface';
import hourItems from './Items/hourItems';
import timeItems from './Items/timeItems';

const hourAsWord = (date: Date, offset: number = 0): ItemInterface => {
    const hour = (date.getHours() + offset) % 12;

    return hourItems[hour === 0 ? 11 : hour - 1];
};
const minuteAsWords = (titles: string[]): ItemInterface[] => timeItems.filter(
    (item): boolean => titles.includes(item.title),
);

export const timeAsWords = (date: Date): ItemInterface[] => {
    let parts: ItemInterface[] = [];

    const isShortlyPast = (0 <= date.getMinutes() && date.getMinutes() <= 2);
    const isFivePast = (3 <= date.getMinutes() && date.getMinutes() <= 7);
    const isTenPast = (8 <= date.getMinutes() && date.getMinutes() <= 12);
    const isQuarter = (13 <= date.getMinutes() && date.getMinutes() <= 17);
    const isTwentyPast = (18 <= date.getMinutes() && date.getMinutes() <= 22);
    const isFiveToHalf = (23 <= date.getMinutes() && date.getMinutes() <= 27);
    const isHalf = (28 <= date.getMinutes() && date.getMinutes() <= 32);
    const isFivePastHalf = (33 <= date.getMinutes() && date.getMinutes() <= 37);
    const isTwentyTo = (38 <= date.getMinutes() && date.getMinutes() <= 42);
    const isQuarterTo = (43 <= date.getMinutes() && date.getMinutes() <= 47);
    const isTenTo = (48 <= date.getMinutes() && date.getMinutes() <= 52);
    const isFiveTo = (53 <= date.getMinutes() && date.getMinutes() <= 57);
    const isShortlyTo = (58 <= date.getMinutes() && date.getMinutes() <= 59);

    if (isShortlyPast) {
        parts = [...minuteAsWords(['um'])];
    }
    if (isFivePast) {
        parts = [...minuteAsWords(['fünf', 'nach'])];
    }
    if (isTenPast) {
        parts = [...minuteAsWords(['zehn', 'nach'])];
    }
    if (isQuarter) {
        parts = [...minuteAsWords(['viertel'])];
    }
    if (isTwentyPast) {
        parts = [...minuteAsWords(['zwanzig', 'nach'])];
    }
    if (isFiveToHalf) {
        parts = [...minuteAsWords(['fünf', 'vor', 'halb'])];
    }
    if (isHalf) {
        parts = [...minuteAsWords(['halb'])];
    }
    if (isFivePastHalf) {
        parts = [...minuteAsWords(['fünf', 'nach', 'halb'])];
    }
    if (isTwentyTo) {
        parts = [...minuteAsWords(['zwanzig', 'vor'])];
    }
    if (isQuarterTo) {
        parts = [...minuteAsWords(['dreiviertel'])];
    }
    if (isTenTo) {
        parts = [...minuteAsWords(['zehn', 'vor'])];
    }
    if (isFiveTo) {
        parts = [...minuteAsWords(['fünf', 'vor'])];
    }
    if (isShortlyTo) {
        parts = [...minuteAsWords(['um'])];
    }

    const isThisHour = isShortlyPast || isFivePast || isTenPast || isTwentyPast;
    const isNextHour = isQuarter || isFiveToHalf || isHalf
        || isFivePastHalf || isTwentyTo || isQuarterTo || isTenTo || isFiveTo || isShortlyTo;

    if (isThisHour) {
        parts = [...parts, hourAsWord(date)];
    }
    if (isNextHour) {
        parts = [...parts, hourAsWord(date, 1)];
    }

    return parts;
};

export default timeAsWords;

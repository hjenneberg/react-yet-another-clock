import ItemInterface from './Items/ItemInterface';
import hourItems from './Items/hourItems';
import timeItems from './Items/timeItems';
import meridiemItems from './Items/meridiemItems';

const hourAsWord = (date: Date, offset: number = 0): ItemInterface => {
    const hour = (date.getHours() + offset) % 12;

    return hourItems[hour === 0 ? 11 : hour - 1];
};
const minuteAsWords = (titles: string[]): ItemInterface[] => timeItems.filter(
    (item): boolean => titles.includes(item.title),
);

const meridiemAsWord = (title: string): ItemInterface => {
    let parts: ItemInterface;
    if ('night' === title) {
        // eslint-disable-next-line prefer-destructuring
        parts = meridiemItems[4];
    }
    if ('morning' === title) {
        // eslint-disable-next-line prefer-destructuring
        parts = meridiemItems[0];
    }
    if ('prenoon' === title) {
        // eslint-disable-next-line prefer-destructuring
        parts = meridiemItems[1];
    }

    return parts;
};

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

    const isThisHour = isShortlyPast || isFivePast || isTenPast || isTwentyPast;
    const isNextHour = isQuarter || isFiveToHalf || isHalf
        || isFivePastHalf || isTwentyTo || isQuarterTo || isTenTo || isFiveTo || isShortlyTo;

    if (isThisHour) {
        parts = [...parts, hourAsWord(date)];
    }
    if (isNextHour) {
        parts = [...parts, hourAsWord(date, 1)];
    }

    const isNight = (23 === date.getHours() || (0 <= date.getHours() && date.getHours() <= 4));
    const isMorning = (5 <= date.getHours() && date.getHours() <= 9);
    const isPreNoon = (10 <= date.getHours() && date.getHours() <= 11);

    if (isNight) {
        parts = [...parts, meridiemAsWord('night')];
    }
    if (isMorning) {
        parts = [...parts, meridiemAsWord('morning')];
    }
    if (isPreNoon) {
        parts = [...parts, meridiemAsWord('prenoon')];
    }

    return parts;
};

export default timeAsWords;

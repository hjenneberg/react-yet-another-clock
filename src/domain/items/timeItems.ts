import ItemInterface from './ItemInterface';

const timeWords: string[] = [
    'fünf',
    'zehn',
    'zwanzig',
    'um',
    'vor',
    'nach',
    'viertel',
    'halb',
    'dreiviertel',
];
export const timeItems: ItemInterface[] = timeWords.map(
    (time: string): ItemInterface => ({
        type: 'time',
        title: time,
    }),
);

export default timeItems;

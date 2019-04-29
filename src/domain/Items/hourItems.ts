import ItemInterface from './ItemInterface';

const hourAsWord: string[] = [
    'eins',
    'zwei',
    'drei',
    'vier',
    'fünf',
    'sechs',
    'sieben',
    'acht',
    'neun',
    'zehn',
    'elf',
    'zwölf',
];

export const hourItems: ItemInterface[] = hourAsWord.map(
    (hour: string): ItemInterface => ({
        type: 'hour',
        title: hour,
    }),
);

export default hourItems;

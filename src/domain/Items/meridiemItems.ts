import ItemInterface from './ItemInterface';

const meridiemsAsWord: string[] = [
    'morgens',
    'vormittag',
    'nachmittag',
    'abends',
    'nachts',
];

export const meridiemItems: ItemInterface[] = meridiemsAsWord.map(
    (meridiem: string): ItemInterface => ({
        type: 'meridiem',
        title: meridiem,
    }),
);

export default meridiemItems;

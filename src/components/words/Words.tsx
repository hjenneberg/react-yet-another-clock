import styled from 'styled-components';
import * as React from 'react';

import timeAsWords from '../../domain/timeAsWords';
import ItemInterface from '../../domain/Items/ItemInterface';
import PropsInterface from './PropsInterface';
import timeItems from '../../domain/Items/timeItems';
import hourItems from '../../domain/Items/hourItems';

const Word = styled.span`
    display: inline-block;
    margin: auto 5px;
`;
export const WordActive = styled(Word)`
`;
export const WordInactive = styled(Word)`
    opacity: .3;
`;
export const WordsStyled = styled.div`
    text-transform: uppercase;
    font-size: 1.5em;
    line-height: 1.35;
    text-align: center;
    color: gainsboro;
    width: 85vw;
    @media all and (min-width: 1025px) {
        width: 20vw
    };
`;

const map = (date: Date): ((item: ItemInterface) => React.ReactElement) => {
    const timeWords = timeAsWords(date);
    return (item: ItemInterface): React.ReactElement => {
        const isWordActive: boolean = item.type === 'plain' || timeWords.includes(item);
        return isWordActive
            ? (
                <WordActive key={`${item.type}|${item.title}`}>
                    {' '}
                    {item.title}
                    {' '}
                </WordActive>
            )
            : (
                <WordInactive key={`${item.type}|${item.title}`}>
                    {' '}
                    {item.title}
                    {' '}
                </WordInactive>
            );
    };
};

const words = [{ type: 'plain', title: 'Es' }, { type: 'plain', title: 'ist' }, ...timeItems, ...hourItems];

export const Words: React.FunctionComponent<PropsInterface> = ({ date }: { date: Date }): React.ReactElement => (
    <WordsStyled>{words.map(map(date))}</WordsStyled>
);

export default Words;

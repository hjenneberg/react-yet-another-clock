import styled from 'styled-components';
import * as React from 'react';

import timeAsWords from '../../domain/timeAsWords';
import ItemInterface from '../../domain/items/ItemInterface';
import PropsInterface from './PropsInterface';
import timeItems from '../../domain/items/timeItems';
import hourItems from '../../domain/items/hourItems';

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
    font-size: 2em;
    line-height: 1.35;
    text-align: center;
    color: gainsboro;
    width: 90vw;
    @media all and (min-width: 1025px) {
        width: 25vw
    };
`;

export const Words: React.FunctionComponent<PropsInterface> = (props: PropsInterface): JSX.Element => (
    <WordsStyled>
        <WordActive>Es</WordActive>
        <WordActive>ist</WordActive>
        <br />
        {
            [...timeItems, ...hourItems].map((item: ItemInterface): JSX.Element => (
                timeAsWords(props.date).includes(item)
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
                    )
            ))
        }
    </WordsStyled>
);

export default Words;

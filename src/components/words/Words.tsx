import styled from 'styled-components';
import * as React from 'react';

import timeAsWords from '../../domain/timeAsWords';
import ItemInterface from '../../domain/items/ItemInterface';
import PropsInterface from './PropsInterface';
import timeItems from '../../domain/items/timeItems';
import hourItems from '../../domain/items/hourItems';

export const Active = styled.span`
`;
export const Inactive = styled.span`
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
        <Active>Es ist</Active>
        {
            [...timeItems, ...hourItems].map((item: ItemInterface): JSX.Element => (
                timeAsWords(props.date).includes(item)
                    ? (
                        <Active key={`${item.type}|${item.title}`}>
                            {' '}
                            {item.title}
                            {' '}
                        </Active>
                    )
                    : (
                        <Inactive key={`${item.type}|${item.title}`}>
                            {' '}
                            {item.title}
                            {' '}
                        </Inactive>
                    )
            ))
        }
    </WordsStyled>
);

export default Words;

import styled from "styled-components";
import * as React from "react";
import timeInWords, {hourItems, timeItems} from "../../domain/timeInWords";
import {FunctionComponent} from "react";

const Active = styled.span`
`;
const Inactive = styled.span`
    opacity: .3;
`;
const WordsStyled = styled.div`
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

type WordsProps = {
    date: Date;
}

export const Words: FunctionComponent<WordsProps> = React.memo(({date}) => <WordsStyled>
    <Active>Es ist</Active>
    {
        [...timeItems, ...hourItems].map(item => timeInWords(date).includes(item)
            ? <Active key={item.type + "|" + item.title}> {item.title} </Active>
            : <Inactive key={item.type + "|" + item.title}> {item.title} </Inactive>
        )
    }
</WordsStyled>, (prev, next) => prev.date.getMinutes() === next.date.getMinutes());

export default Words;

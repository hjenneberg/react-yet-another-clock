import styled from "styled-components";
import * as React from "react";
import timeInWords, {hourItems, timeItems} from "../../domain/timeInWords";
import {FunctionComponent} from "react";

const WordActive = styled.span`
`;
const WordInactive = styled.span`
    opacity: .15;
`;
const WordsStyled = styled.div`
    text-transform: uppercase;
    font-size: 2em;
    line-height: 1.35;
    width: 20vw;
    text-align: center;
`;

type WordsProps = {
    date: Date;
}

export const Words: FunctionComponent<WordsProps> = React.memo(({date}) => <WordsStyled>
    <WordActive>Es ist</WordActive>
    {
        [...timeItems, ...hourItems].map(item => timeInWords(date).includes(item)
            ? <WordActive key={item.type + "-" + item.title}> {item.title} </WordActive>
            : <WordInactive key={item.type + "-" + item.title}> {item.title} </WordInactive>
        )
    }
</WordsStyled>, (prev, next) => prev.date.getMinutes() === next.date.getMinutes());

export default Words;

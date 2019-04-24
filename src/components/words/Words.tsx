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
    width: 20vw;
`;

type WordsProps = {
    date: Date;
}

export const Words: FunctionComponent<WordsProps> = ({date}) => <WordsStyled>
    {
        [...timeItems, ...hourItems].map(item => timeInWords(date).includes(item)
            ? <WordActive> {item.title} </WordActive>
            : <WordInactive> {item.title} </WordInactive>)
    }
</WordsStyled>;

export default Words;

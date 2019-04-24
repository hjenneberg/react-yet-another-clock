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

export const Words: FunctionComponent<WordsProps> = React.memo((props) => {console.log(props); return <WordsStyled>
    {
        [...timeItems, ...hourItems].map(item => timeInWords(props.date).includes(item)
            ? <WordActive key={item.type + "-" + item.title}> {item.title} </WordActive>
            : <WordInactive key={item.type + "-" + item.title}> {item.title} </WordInactive>
        )
    }
</WordsStyled>;}, (prev, next) => prev.date.getMinutes() === next.date.getMinutes());

export default Words;

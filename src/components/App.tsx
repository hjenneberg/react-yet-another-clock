import * as React from "react";
import styled from "styled-components";
import {useEffect, useState} from "react";

const WordActive = styled.span`
`;
const WordInactive = styled.span`
    opacity: .15;
`;
const Words = styled.div`
    text-transform: uppercase;
    font-size: 2em;
    width: 20vw;
`;

const allTimeItems = [
    "fünf", "zehn", "zwanzig",
    "um", "vor", "nach",
    "viertel", "halb", "dreiviertel",
];
const hoursInWords = [
    "eins", "zwei", "drei", "vier", "fünf", "sechs", "sieben", "acht", "neun", "zehn", "elf", "zwölf",
];
const timeInWords = (date: Date) => {
    let hours = date.getHours();
    let activeTimeItems: string[] = [];
    const minutes = date.getMinutes();
    switch (minutes) {
        case 58: case 59:
            hours += 1;
            activeTimeItems = ["um"];
            break;
        case 0: case 1: case 2:
            activeTimeItems = ["um"];
            break;
        case 3: case 4: case 5: case 6: case 7:
            activeTimeItems = ["fünf", "nach"];
            break;
        case 8: case 9: case 10: case 11: case 12:
            activeTimeItems = ["zehn", "nach"];
            break;
        case 13: case 14: case 15: case 16: case 17:
            hours += 1;
            activeTimeItems = ["viertel"];
            break;
        case 18: case 19: case 20: case 21: case 22:
            activeTimeItems = ["zwanzig", "nach"];
            break;
        case 23: case 24: case 25: case 26: case 27:
            hours += 1;
            activeTimeItems = ["fünf", "vor", "halb"];
            break;
        case 28: case 29: case 30: case 31: case 32:
            hours += 1;
            activeTimeItems = ["halb"];
            break;
        case 33: case 34: case 35: case 36: case 37:
            hours += 1;
            activeTimeItems = ["fünf", "nach", "halb"];
            break;
        case 38: case 39: case 40: case 41: case 42:
            hours += 1;
            activeTimeItems = ["zwanzig", "vor"];
            break;
        case 43: case 44: case 45: case 46: case 47:
            hours += 1;
            activeTimeItems = ["dreiviertel"];
            break;
        case 48: case 49: case 50: case 51: case 52:
            hours += 1;
            activeTimeItems = ["zehn", "vor"];
            break;
        case 53: case 54: case 55: case 56: case 57:
            hours += 1;
            activeTimeItems = ["fünf", "vor"];
            break;
    }

    const minuteWords = allTimeItems.map((word: string) =>
        activeTimeItems.includes(word) ? <WordActive> {word} </WordActive> : <WordInactive> {word} </WordInactive>
    );

    hours = hours%12;
    hours = hours === 0 ? 11 : hours - 1;
    const hourWords = hoursInWords.map((word: string, index: number) =>
        hours === index ? <WordActive> {word} </WordActive> : <WordInactive> {word} </WordInactive>
    );

    return <Words>Es ist {minuteWords} {hourWords}</Words>;
};

const polarToCartesian = (centerX: number, centerY: number, radius: number, angleInDegrees: number) => {
    const angleInRadians = (angleInDegrees - 90) * Math.PI / 180.0;

    return {
        x: centerX + (radius * Math.cos(angleInRadians)),
        y: centerY + (radius * Math.sin(angleInRadians))
    };
};

const describeArc = (x: number, y: number, radius: number, startAngle: number, endAngle: number) => {
    const start = polarToCartesian(x, y, radius, endAngle);
    const end = polarToCartesian(x, y, radius, startAngle);

    const largeArcFlag = endAngle - startAngle <= 180 ? "0" : "1";

    return [
        "M", start.x, start.y,
        "A", radius, radius, 0, largeArcFlag, 0, end.x, end.y
    ].join(" ");
};

const AppStyled = styled.div`
    font-family: Montserrat, sans-serif;
    text-align: center;
    display: flex;
    justify-content: center;
    align-items: center;
    background: darkolivegreen;
    width: 100vw;
    height: 100vh;
`;

const App = () => {
    const [date, setDate] = useState(new Date());

    useEffect(() => {
        const updateInterval = setInterval(() => setDate(new Date()), 100);

        return () => clearInterval(updateInterval);
    });

    const otherArc = (date.getSeconds() * 1000 + date.getMilliseconds()) / 166.666666667;
    const arcSeconds = (date.getSeconds() * 1000 + date.getMilliseconds()) / 166.666666667;
    const arcFastest = (date.getSeconds() * 1000 + date.getMilliseconds()) / (166.666666667 / 60);

    // console.log(otherArc);

    return <AppStyled>
        {
            timeInWords(date)
        }
        {/*<svg style={{position: "fixed", width: "500px", height: "500px", opacity: .5}}>*/}
        {/*    <path fill="none" stroke="#455B1F" strokeWidth="4" d={describeArc(250, 250, 235, arcFastest - 20, arcFastest + 20)} />*/}
        {/*</svg>*/}
        <svg style={{position: "fixed", width: "500px", height: "500px"}}>
            <path fill="none" stroke="#000" strokeWidth="4" d={describeArc(250, 250, 240, arcSeconds - 20, arcSeconds + 20)} />
        </svg>
    </AppStyled>;
};

export default App;

import * as React from "react";
import styled from "styled-components";
import {useEffect, useState} from "react";
import Words from "./words/Words";

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
        <Words date={date}/>

        {/*<svg style={{position: "fixed", width: "500px", height: "500px", opacity: .5}}>*/}
        {/*    <path fill="none" stroke="#455B1F" strokeWidth="4" d={describeArc(250, 250, 235, arcFastest - 20, arcFastest + 20)} />*/}
        {/*</svg>*/}
        <svg style={{position: "fixed", width: "500px", height: "500px"}}>
            <path fill="none" stroke="#000" strokeWidth="4" d={describeArc(250, 250, 240, arcSeconds - 20, arcSeconds + 20)}/>
        </svg>
    </AppStyled>;
};

export default App;

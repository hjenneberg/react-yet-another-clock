import * as React from "react";
import styled from "styled-components";
import {useEffect, useState} from "react";
import Words from "./words/Words";

const AppStyled = styled.div`
    font-family: Montserrat, sans-serif;
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
        const updateInterval = setInterval(() => setDate(new Date()), 1000);

        return () => clearInterval(updateInterval);
    });

    return <AppStyled><Words date={date}/></AppStyled>;
};

export default App;

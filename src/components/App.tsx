import * as React from "react";
import {useEffect, useState} from "react";
import Words from "./words/Words";

const App = () => {
    const [date, setDate] = useState(new Date());

    useEffect(() => {
        const updateInterval = setInterval(() => setDate(new Date()), 1000);

        return () => clearInterval(updateInterval);
    });

    return <Words date={date}/>;
};

export default App;

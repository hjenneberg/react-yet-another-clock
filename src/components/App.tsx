import * as React from 'react';
import { ThemeProvider } from 'styled-components';

import Words from './words/Words';
import PropsInterface from './PropsInterface';

export const App: React.FunctionComponent<PropsInterface> = ({ theme }): JSX.Element => {
    const [date, setDate] = React.useState(new Date());

    React.useEffect((): () => void => {
        const updateInterval = setInterval((): void => setDate(new Date()), 1000);

        return (): void => clearInterval(updateInterval);
    });

    return <ThemeProvider theme={theme}><Words date={date} /></ThemeProvider>;
};

export default App;

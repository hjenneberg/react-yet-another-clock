import * as React from 'react';
import Words from './words/Words';

const App = (): JSX.Element => {
    const [date, setDate] = React.useState(new Date());

    React.useEffect((): React.EffectCallback => {
        const updateInterval = setInterval((): void => setDate(new Date()), 1000);

        return (): void => clearInterval(updateInterval);
    });

    return <Words date={date} />;
};

export default App;

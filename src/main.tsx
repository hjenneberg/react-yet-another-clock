import * as React from 'react';
import * as ReactDOM from 'react-dom';

import 'normalize.css';

import App from './components/App';
import { dark } from './ui/theme';

App.defaultProps = {
    theme: dark,
};

ReactDOM.render(<App />, document.getElementById('root'));

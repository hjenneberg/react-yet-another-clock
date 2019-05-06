import React from 'react';
import { addDecorator, configure } from '@storybook/react';
import { ThemeProvider } from 'styled-components';
import dark from '../src/ui/theme';

const styles = {
    style: {
        fontFamily: 'Montserrat, sans-serif',
        position: 'fixed',
        background: 'black',
        top: 0,
        left: 0,
        bottom: 0,
        right: 0,
        display: 'flex',
        alignItems: 'center',
        overflow: 'auto',
        textTransform: 'uppercase',
        fontSize: '1.5em',
        lineHeight: '1.35',
        textAlign: 'center',
    },
    innerStyle: {
        margin: 'auto',
        maxHeight: '100%',
        overflow: 'auto',
    },
};

addDecorator(storyFn => <div style={styles.style}>
    <div style={styles.innerStyle}><ThemeProvider theme={dark}>{storyFn()}</ThemeProvider></div>
</div>);

function loadStories() {
    require('../stories/index.tsx');
}

configure(loadStories, module);

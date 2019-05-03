import { configure, addDecorator } from '@storybook/react';
import React from 'react';

function loadStories() {
    require('../stories/index.tsx');
}

const styles = {
    style: {
        fontFamily: 'Montserrat, sans-serif',
        background: 'black',
        position: 'fixed',
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
addDecorator(storyFn => <div style={styles.style}><div style={styles.innerStyle}>{storyFn()}</div></div>);

configure(loadStories, module);

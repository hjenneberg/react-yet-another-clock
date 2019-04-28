/* eslint-disable import/no-extraneous-dependencies */
import * as React from 'react';
import { storiesOf } from '@storybook/react';

import Words, { WordActive, WordInactive, WordsStyled } from '../src/components/words/Words';
import App from '../src/components/App';

storiesOf('a word', module)
    .add('that is active', (): JSX.Element => (
        <WordsStyled><WordActive>Active</WordActive></WordsStyled>
    ))
    .add('that is inactive', (): JSX.Element => (
        <WordsStyled><WordInactive>Inactive</WordInactive></WordsStyled>
    ));

storiesOf('all words', module)
    .add('that show a certain point in time', (): JSX.Element => (
        <Words date={new Date('2019-04-28 12:05:00')} />
    ));

storiesOf('a certain sentence', module)
    .add('that is the App itself', (): JSX.Element => (
        <App />
    ));

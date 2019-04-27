/* eslint-disable import/no-extraneous-dependencies */
import * as React from 'react';
import { storiesOf } from '@storybook/react';

import Words, { WordActive, WordInactive, WordsStyled } from '../src/components/words/Words';
import App from '../src/components/App';

storiesOf('a styled word', module)
    .add('that is active', (): JSX.Element => (
        <WordsStyled><WordActive>Active</WordActive></WordsStyled>
    ))
    .add('that is inactive', (): JSX.Element => (
        <WordsStyled><WordInactive>Inactive</WordInactive></WordsStyled>
    ));

storiesOf('certains words', module)
    .add('that …', (): JSX.Element => (
        <Words date={new Date()} />
    ));

storiesOf('a certain sentence', module)
    .add('that is whatever', (): JSX.Element => (
        <App />
    ));

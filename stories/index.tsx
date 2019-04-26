/* eslint-disable import/no-extraneous-dependencies */
import * as React from 'react';
import { storiesOf } from '@storybook/react';
import Words, { Active, Inactive, WordsStyled } from '../src/components/words/Words';
import App from '../src/components/App';

storiesOf('a word', module)
    .add('that is active', (): JSX.Element => (
        <Active>Active</Active>
    ))
    .add('that is inactive', (): JSX.Element => (
        <Inactive>Inactive</Inactive>
    ));

storiesOf('a styled word', module)
    .add('that is active', (): JSX.Element => (
        <WordsStyled><Active>Active</Active></WordsStyled>
    ))
    .add('that is inactive', (): JSX.Element => (
        <WordsStyled><Inactive>Inactive</Inactive></WordsStyled>
    ));

storiesOf('certains words', module)
    .add('that …', (): JSX.Element => (
        <Words date={new Date()} />
    ));

storiesOf('a certain sentence', module)
    .add('that is whatever', (): JSX.Element => (
        <App />
    ));

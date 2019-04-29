import React from 'react';
import { TableTitle } from '@bluebase/components';
import storiesOf from '@bluebase/storybook-addon';

const stories = storiesOf('TableTitle', module);

stories.add('TableTitle', () => <TableTitle>{'TableTitle'}</TableTitle>);

import React from 'react';
import { TableRow } from '@bluebase/components';
import storiesOf from '@bluebase/storybook-addon';

const stories = storiesOf('TableRow', module);

stories.add('TableRow', () => <TableRow>{'TableRow'}</TableRow>);

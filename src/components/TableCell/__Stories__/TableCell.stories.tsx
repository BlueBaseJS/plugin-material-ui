import React from 'react';
import { TableCell } from '@bluebase/components';
import storiesOf from '@bluebase/storybook-addon';

const stories = storiesOf('TableCell', module);

stories.add('TableCell', () => <TableCell>{'TableCell'}</TableCell>);

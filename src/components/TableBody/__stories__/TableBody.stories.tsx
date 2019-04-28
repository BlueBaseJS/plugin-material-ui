import React from 'react';
import { TableBody } from '@bluebase/components';
import storiesOf from '@bluebase/storybook-addon';

const stories = storiesOf('TableBody', module);

stories.add('TableBody', () => <TableBody>{'TableBody'}</TableBody>);

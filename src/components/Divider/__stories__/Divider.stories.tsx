import React from 'react';
import { getComponent } from '@bluebase/core';
import storiesOf from '@bluebase/storybook-addon';

const Divider = getComponent('Divider');

storiesOf('Divider', module)

.add('Default props', () => (
	<div style={{ padding: 20 }}><Divider /></div>
))

.add('Inset', () => (
	<div style={{ padding: 20 }}><Divider inset /></div>
));
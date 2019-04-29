import React from 'react';
import { getComponent } from '@bluebase/core';
import storiesOf from '@bluebase/storybook-addon';

const H2 = getComponent('H2');

storiesOf('H2', module)

.add('Default props', () => (
	<H2>Example</H2>
));
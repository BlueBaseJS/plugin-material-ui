import React from 'react';
import { getComponent } from '@bluebase/core';
import storiesOf from '@bluebase/storybook-addon';

const H6 = getComponent('H6');

storiesOf('H6', module)

.add('Default props', () => (
	<H6>Example</H6>
));
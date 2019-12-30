import React from 'react';
import { getComponent } from '@bluebase/core';
import storiesOf from '@bluebase/storybook-addon';

const H3 = getComponent('H3');

storiesOf('H3', module)

.add('Default props', () => (
	<H3>Example</H3>
));
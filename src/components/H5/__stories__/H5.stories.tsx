import React from 'react';
import { getComponent } from '@bluebase/core';
import storiesOf from '@bluebase/storybook-addon';

const H5 = getComponent('H5');

storiesOf('H5', module)

.add('Default props', () => (
	<H5>Example</H5>
));
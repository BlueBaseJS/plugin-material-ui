import React from 'react';
import { getComponent } from '@bluebase/core';
import storiesOf from '@bluebase/storybook-addon';

const H4 = getComponent('H4');

storiesOf('H4', module)

.add('Default props', () => (
	<H4>Example</H4>
));
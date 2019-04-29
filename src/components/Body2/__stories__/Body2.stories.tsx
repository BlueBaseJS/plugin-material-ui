import React from 'react';
import { getComponent } from '@bluebase/core';
import storiesOf from '@bluebase/storybook-addon';

const Body2 = getComponent('Body2');

storiesOf('Body2', module)

.add('Default props', () => (
	<Body2>Example</Body2>
));
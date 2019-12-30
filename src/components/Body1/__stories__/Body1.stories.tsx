import React from 'react';
import { getComponent } from '@bluebase/core';
import storiesOf from '@bluebase/storybook-addon';

const Body1 = getComponent('Body1');

storiesOf('Body1', module)

.add('Default props', () => (
	<Body1>Example</Body1>
));
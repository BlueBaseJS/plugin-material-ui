import React from 'react';
import { getComponent } from '@bluebase/core';
import storiesOf from '@bluebase/storybook-addon';

const Subtitle1 = getComponent('Subtitle1');

storiesOf('Subtitle1', module)

.add('Default props', () => (
	<Subtitle1>Example</Subtitle1>
));
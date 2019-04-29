import React from 'react';
import { getComponent } from '@bluebase/core';
import storiesOf from '@bluebase/storybook-addon';

const Subtitle2 = getComponent('Subtitle2');

storiesOf('Subtitle2', module)

.add('Default props', () => (
	<Subtitle2>Example</Subtitle2>
));
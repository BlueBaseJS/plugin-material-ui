import React from 'react';
import { getComponent } from '@bluebase/core';
import storiesOf from '@bluebase/storybook-addon';

const Overline = getComponent('Overline');

storiesOf('Overline', module)

.add('Default props', () => (
	<Overline>Example</Overline>
));
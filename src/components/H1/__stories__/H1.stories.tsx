import { H1 } from '../H1';
import React from 'react';
import storiesOf from '@bluebase/storybook-addon';


storiesOf('H1', module)

.add('Default props', () => (
	<H1>Example</H1>
));
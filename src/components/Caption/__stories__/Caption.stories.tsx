import React from 'react';
import { getComponent } from '@bluebase/core';
import storiesOf from '@bluebase/storybook-addon';

const Caption = getComponent('Caption');

storiesOf('Caption', module)

.add('Default props', () => (
	<Caption>Example</Caption>
));
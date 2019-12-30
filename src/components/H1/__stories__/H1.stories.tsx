import React from 'react';
import { getComponent } from '@bluebase/core';
import storiesOf from '@bluebase/storybook-addon';

const H1 = getComponent('H1');


storiesOf('H1', module)

	.add('Default props', () => (
		<H1 align="center" color="success" gutterBottom={true} noWrap={true} style={{}} >Example</H1>
	));

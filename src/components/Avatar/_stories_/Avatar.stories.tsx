import React from 'react';
import storiesOf from '@bluebase/storybook-addon';
import { withInfo } from '@storybook/addon-info';
import { withKnobs } from '@storybook/addon-knobs';
import { getComponent } from '@bluebase/core';



const Avatar = getComponent('Avatar');
const stories = storiesOf('Avatar', module);

stories.addDecorator(withInfo);
stories.addDecorator(withKnobs);

stories

	.add('Simple Avatar ', () => (
		<Avatar
			source="https://s3-us-west-2.amazonaws.com/bluerainimages/water-dispenser.svg"
			size={100}

		/>

	));



stories

	.add('Simple Avatar without size', () => (
		<Avatar
			source="https://s3-us-west-2.amazonaws.com/bluerainimages/water-dispenser.svg"
			alt="image"
			size={20}
		/>

	));


stories

	.add('Simple Avatar with style prop', () => (
		<Avatar style={{ width: 100, height: 100, backgroundColor: 'red' }}>
			Avatar
</Avatar>

	));

stories

	.add('Simple Avatar with child prop', () => (
		<Avatar>
			avatar
	</Avatar>

	));
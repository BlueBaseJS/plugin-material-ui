import { AvatarProps } from '@bluebase/components';
import React from 'react';
import { getComponent } from '@bluebase/core';
import storiesOf from '@bluebase/storybook-addon';
import { withInfo } from '@storybook/addon-info';
import { withKnobs } from '@storybook/addon-knobs';

const Avatar = getComponent<AvatarProps>('Avatar');

const stories = storiesOf('Avatar', module);

stories.addDecorator(withInfo);
stories.addDecorator(withKnobs);

stories.add('Simple Avatar ', () => (
	<Avatar
		type="image"
		image={{ uri: 'https://via.placeholder.com/300/09f.png' }}
		size={200}
	/>
));



stories.add('Simple Avatar with text prop ', () => (
	<Avatar
		type="text"
		text="N"
	/>
));



stories.add('Simple Avatar with icon prop and size', () => (
	<Avatar
		type="icon"
		icon="check"
		size={200}
		color={'white'}
		avatarColor="green"
	/>
));

stories.add('Simple Avatar local images ', () => (
	<Avatar
		type="image"
		image={require('./image/download.png')}
		// style={{ width: 100, height: 100 }}
		size={200}
	/>

));


stories.add('Simple Avatar  with style prop ', () => (
	<Avatar
		style={{ height: 80, width: 80 }}
		type="image"
		image={require('./image/image.svg')}
	/>

));
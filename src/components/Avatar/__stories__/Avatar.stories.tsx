import { AvatarProps } from '@bluebase/components';
import { getComponent } from '@bluebase/core';
import storiesOf from '@bluebase/storybook-addon';
import { withInfo } from '@storybook/addon-info';
import { withKnobs } from '@storybook/addon-knobs';
import React from 'react';
import { View } from 'react-native';

const Avatar = getComponent<AvatarProps>('Avatar');

const stories = storiesOf('Avatar', module);

stories.addDecorator(withInfo);
stories.addDecorator(withKnobs);

stories.add('Custom Size Avatar ', () => (
	<Avatar type="image" image={{ uri: 'https://placeimg.com/200/200/any' }} size={200} />
));

stories.add('Simple Avatar with text prop ', () => (
	<Avatar type="text" text="N" style={{ backgroundColor: 'green' }} />
));

stories.add('Simple Avatar with icon prop ', () => (
	<Avatar type="icon" icon="star" textStyle={{ color: 'blue' }} />
));

stories.add('Variants', () => (
	<>
		<View style={{ flexDirection: 'row' }}>
			<Avatar
				variant="square"
				type="image"
				image={{ uri: 'https://placeimg.com/100/100/any' }}
				style={{ margin: 4 }}
			/>
			<Avatar
				variant="rounded"
				type="image"
				image={{ uri: 'https://placeimg.com/100/100/any' }}
				style={{ margin: 4 }}
			/>
			<Avatar
				variant="circle"
				type="image"
				image={{ uri: 'https://placeimg.com/100/100/any' }}
				style={{ margin: 4 }}
			/>
		</View>
		<View style={{ flexDirection: 'row' }}>
			<Avatar variant="square" type="text" text="A" style={{ margin: 4 }} />
			<Avatar variant="rounded" type="text" text="B" style={{ margin: 4 }} />
			<Avatar variant="circle" type="text" text="C" style={{ margin: 4 }} />
		</View>
		<View style={{ flexDirection: 'row' }}>
			<Avatar variant="square" type="icon" icon="delete" style={{ margin: 4 }} />
			<Avatar variant="rounded" type="icon" icon="delete" style={{ margin: 4 }} />
			<Avatar variant="circle" type="icon" icon="delete" style={{ margin: 4 }} />
		</View>
	</>
));

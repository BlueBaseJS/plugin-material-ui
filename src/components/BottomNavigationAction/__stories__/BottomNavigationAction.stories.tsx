import { BottomNavigationAction } from '@bluebase/components';
import storiesOf from '@bluebase/storybook-addon';
import { withInfo } from '@storybook/addon-info';
import { withKnobs } from '@storybook/addon-knobs';
import React from 'react';

const stories = storiesOf('BottomNavigationAction', module);

stories.addDecorator(withInfo);
stories.addDecorator(withKnobs);

stories

	.add('Label Only', () => (
		<BottomNavigationAction showLabel label="Item One" />
	))

	.add('Icon Only', () => (
		<BottomNavigationAction
			showLabel
			icon={{ type: 'image', size: 20, source: { uri: 'https://placeimg.com/100/100/any' } }}
		/>
	))

	.add('Icon & Label', () => (
		<BottomNavigationAction
			showLabel
			label="Item One"
			icon={{ type: 'image', size: 20, source: { uri: 'https://placeimg.com/100/100/any' } }}
		/>
	))
;
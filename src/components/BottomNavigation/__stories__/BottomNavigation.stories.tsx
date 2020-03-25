import { BottomNavigation, BottomNavigationAction } from '@bluebase/components';
import React from 'react';
import storiesOf from '@bluebase/storybook-addon';
import { withInfo } from '@storybook/addon-info';
import { withKnobs } from '@storybook/addon-knobs';

const stories = storiesOf('BottomNavigation', module);

stories.addDecorator(withInfo);
stories.addDecorator(withKnobs);

stories

.add('Simple', () => (
	<BottomNavigation value={1} showLabels onChange={(_e, i) => console.log(`Clicked tab ${i}`)} >
		<BottomNavigationAction label="Item One" />
		<BottomNavigationAction label="Item Two" />
		<BottomNavigationAction label="Item Three" />
	</BottomNavigation>
))

.add('Icon', () => (
	<BottomNavigation value={1} onChange={(_e, i) => console.log(`Clicked tab ${i}`)} >
		<BottomNavigationAction
			label="Item One"
			icon={{ type: 'icon', name: 'star' }}
		/>
		<BottomNavigationAction
			label="Item Two"
			icon={{ type: 'icon', name: 'favorite' }}
		/>
		<BottomNavigationAction
			label="Item Three"
			icon={{ type: 'icon', name: 'help' }}
		/>
		<BottomNavigationAction
			label="Item Four"
			icon={{ type: 'icon', name: 'delete' }}
		/>
	</BottomNavigation>
))
;
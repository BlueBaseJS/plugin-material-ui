import React from 'react';
// import { Tab } from '@bluebase/components';
import { getComponent } from '@bluebase/core';
import storiesOf from '@bluebase/storybook-addon';
import { withInfo } from '@storybook/addon-info';
import { withKnobs } from '@storybook/addon-knobs';

const Tabs = getComponent('Tabs');
const Tab = getComponent('Tab');
const stories = storiesOf('Tabs', module);

stories.addDecorator(withInfo);
stories.addDecorator(withKnobs);

const style = {
	root: {
		backgroundColor: 'white',
		flexGrow: 1,
	},
	tabsRoot: {
		borderBottom: '1px solid #e8e8e8',
	},
	tabsIndicator: {
		backgroundColor: '#1890ff',
	},
	tabRoot: {
		textTransform: 'initial',
		minWidth: 72,
		// marginRight: theme.spacing.unit * 4,
		fontFamily: [
			'-apple-system',
			'BlinkMacSystemFont',
			'"Segoe UI"',
			'Roboto',
			'"Helvetica Neue"',
			'Arial',
			'sans-serif',
			'"Apple Color Emoji"',
			'"Segoe UI Emoji"',
			'"Segoe UI Symbol"',
		].join(','),
		'&:hover': {
			color: 'yellow',
			opacity: 1,
		},
		'&$tabSelected': {
			color: 'yellow',
		},
		'&:focus': {
			color: 'red',
		},
	},
	tabSelected: {},
	typography: {
		// padding: theme.spacing.unit * 3,
	},
};

stories.add('Label only Tabs', () => (
	<Tabs
		styles={style}
		// styles={{}}

		value={1}
		// onChange={(_e, i) => console.log(`Clicked tab ${i}`)}
	>
		<Tab
			// disableRip.ple
			classes={{ root: style.tabRoot, selected: style.tabSelected }}
			label="Tab 1"
		/>
		<Tab label="Tab 2" />
		<Tab label="Tab 3" disabled />
	</Tabs>
));

// .add('Icon & Label Tabs', () => (
// 	<Tabs value={1} onChange={(_e, i) => console.log(`Clicked tab ${i}`)}>
// 		<Tab label="Item One" icon={{ type: 'icon', name: 'star' }} />
// 		<Tab label="Item Two" icon={{ type: 'icon', name: 'favorite' }} />
// 		<Tab label="Item Three" icon={{ type: 'icon', name: 'help' }} disabled />
// 	</Tabs>
// ))

// .add('Icon only Tabs', () => (
// 	<Tabs value={1} onChange={(_e, i) => console.log(`Clicked tab ${i}`)}>
// 		<Tab icon={{ type: 'icon', name: 'star' }} />
// 		<Tab icon={{ type: 'icon', name: 'favorite' }} />
// 		<Tab icon={{ type: 'icon', name: 'help' }} disabled />
// 	</Tabs>
// ));

// import { Tab } from '@bluebase/components';
import { getComponent, Theme } from '@bluebase/core';
import storiesOf from '@bluebase/storybook-addon';
import { withKnobs } from '@storybook/addon-knobs';
import React from 'react';

import { TabsComponent } from './TabsComponent';

const Tabs = getComponent('Tabs');
const Tab = getComponent('Tab');
const stories = storiesOf('Tabs', module);

stories.addDecorator(withKnobs);

const tabsStyles = (_theme: Theme) => {
	return {
		root: {},
	};
};

const tabStyles = (theme: Theme) => {
	return {
		root: {
			backgroundColor: theme.palette.secondary.main,
			color: theme.palette.secondary.contrastText,
		},
	};
};
const tab3Styles = (theme: Theme) => {
	return {
		root: {
			backgroundColor: theme.palette.success.main,
			color: theme.palette.success.contrastText,
		},
	};
};

stories
	.add('Label only Tabs', () => {
		return <TabsComponent />;
	})

	.add('Icon & Label Tabs', () => (
		<Tabs value={1} onChange={(_e: any, i: any) => console.log(`Clicked tab ${i}`)}>
			<Tab label="Item One" icon={{ type: 'icon', name: 'star' }} />
			<Tab label="Item Two" icon={{ type: 'icon', name: 'favorite' }} />
			<Tab label="Item Three" icon={{ type: 'icon', name: 'help' }} />
		</Tabs>
	))

	.add('Icon only Tabs', () => (
		<Tabs value={1} onChange={(_e: any, i: any) => console.log(`Clicked tab ${i}`)}>
			<Tab icon={{ type: 'icon', name: 'star' }} />
			<Tab icon={{ type: 'icon', name: 'favorite' }} />
			<Tab icon={{ type: 'icon', name: 'help' }} disabled />
		</Tabs>
	))
	.add('Tabs With styles', () => (
		<Tabs
			styles={tabsStyles}
			value={1}
			onChange={(_e: any, i: any) => console.log(`Clicked tab ${i}`)}
		>
			<Tab icon={{ type: 'icon', name: 'star' }} />
			<Tab label="Tab" styles={tabStyles} />
			<Tab icon={{ type: 'icon', name: 'help' }} styles={tab3Styles} />
		</Tabs>
	));

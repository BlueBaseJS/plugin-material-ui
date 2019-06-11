// import { Tab } from '@bluebase/components';
import { Theme, getComponent } from '@bluebase/core';

import React from 'react';
import { TabsComponent } from './TabsComponent';
import storiesOf from '@bluebase/storybook-addon';
import { withInfo } from '@storybook/addon-info';
import { withKnobs } from '@storybook/addon-knobs';

const Tabs = getComponent('Tabs');
const Tab = getComponent('Tab');
const stories = storiesOf('Tabs', module);

stories.addDecorator(withInfo);
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
			<Tab label="Item One" icon="star" />
			<Tab label="Item Two" icon="favorite" />
			<Tab label="Item Three" icon="help" />
		</Tabs>
	))

	.add('Icon only Tabs', () => (
		<Tabs value={1} onChange={(_e: any, i: any) => console.log(`Clicked tab ${i}`)}>
			<Tab icon="star" />
			<Tab icon="favorite" />
			<Tab icon="help" disabled />
		</Tabs>
	))
	.add('Tabs With styles', () => (
		<Tabs
			styles={tabsStyles}
			value={1}
			onChange={(_e: any, i: any) => console.log(`Clicked tab ${i}`)}
		>
			<Tab icon="star" />
			<Tab label="Tab" styles={tabStyles} />
			<Tab icon="help" styles={tab3Styles} />
		</Tabs>
	));

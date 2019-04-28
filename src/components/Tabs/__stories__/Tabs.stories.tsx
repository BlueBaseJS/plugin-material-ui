import { Tab, Tabs } from '@bluebase/components';
import React from 'react';
import storiesOf from '@bluebase/storybook-addon';
import { withInfo } from '@storybook/addon-info';
import { withKnobs } from '@storybook/addon-knobs';

const stories = storiesOf('Tabs', module);

stories.addDecorator(withInfo);
stories.addDecorator(withKnobs);

stories

.add('Label only Tabs', () => (
	<Tabs value={1} onChange={(_e, i) => console.log(`Clicked tab ${i}`)} >
		<Tab label="Item One" />
		<Tab label="Item Two" />
		<Tab label="Item Three" disabled />
	</Tabs>
))

.add('Icon & Label Tabs', () => (
	<Tabs value={1} onChange={(_e, i) => console.log(`Clicked tab ${i}`)} >
		<Tab label="Item One" icon={{ type: 'icon', name: 'star' }} />
		<Tab label="Item Two" icon={{ type: 'icon', name: 'favorite' }} />
		<Tab label="Item Three" icon={{ type: 'icon', name: 'help' }} disabled />
	</Tabs>
))

.add('Icon only Tabs', () => (
	<Tabs value={1} onChange={(_e, i) => console.log(`Clicked tab ${i}`)} >
		<Tab icon={{ type: 'icon', name: 'star' }} />
		<Tab icon={{ type: 'icon', name: 'favorite' }} />
		<Tab icon={{ type: 'icon', name: 'help' }} disabled />
	</Tabs>
))
;
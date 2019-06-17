import React from 'react';
import { getComponent } from '@bluebase/core';
import storiesOf from '@bluebase/storybook-addon';
import { withInfo } from '@storybook/addon-info';
import { withKnobs } from '@storybook/addon-knobs';

const Tab = getComponent('Tab');

const stories = storiesOf('Tab', module);

stories.addDecorator(withInfo);
stories.addDecorator(withKnobs);

stories

	.add('Label Only Tab', () => <Tab label="Item One" />)

	.add('Icon Only Tab', () => <Tab icon={{ type: 'icon', name: 'delete' }} />)

	.add('Icon & Label Tab', () => (
		<Tab label="Item One" icon={{ type: 'icon', name: 'favorite' }} />
	));

import React from 'react';
import { Tab } from '@bluebase/components';
import storiesOf from '@bluebase/storybook-addon';
import { withInfo } from '@storybook/addon-info';
import { withKnobs } from '@storybook/addon-knobs';

const stories = storiesOf('Tab', module);

stories.addDecorator(withInfo);
stories.addDecorator(withKnobs);

stories

.add('Label Only Tab', () => (
	<Tab label="Item One" />
))

.add('Icon Only Tab', () => (
	<Tab
	label="Asad"
selected={true}
	// icon={{ type: 'image', size: 20, source: { uri: 'https://placeimg.com/100/100/any' } }} 
	/>
))

.add('Icon & Label Tab', () => (
	<Tab label="Item One" icon={{ type: 'image', size: 20, source: { uri: 'https://placeimg.com/100/100/any' } }} />
))
;
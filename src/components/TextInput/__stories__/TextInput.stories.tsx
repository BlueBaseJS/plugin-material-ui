import { text, withKnobs } from '@storybook/addon-knobs';
import React from 'react';
import { TextInputProps } from '@bluebase/components';
import { action } from '@storybook/addon-actions';
import { getComponent } from '@bluebase/core';
import storiesOf from '@bluebase/storybook-addon';

const TextInput = getComponent<TextInputProps>('TextInput');

const stories = storiesOf('TextInput', module);

stories.addDecorator(withKnobs);

stories

.add('Simple Example', () => (
	<TextInput
		id="standard-name"
		label="Name"
		onChangeText={action('onChangeText: ')}
		helperText="Try typing something awesome in the text field above"
	/>
))

.add('Value Prop', () => (
	<TextInput
		id="standard-name"
		label="Name"
		value={text('value', 'Jon Doe')}
	/>
))

.add('Required Field', () => (
	<TextInput
		required
		id="standard-name"
		label="Name"
		helperText="This field is required because required prop is set to true"
	/>
))

.add('Error State', () => (
	<TextInput
		error
		id="standard-error"
		label="Name"
		defaultValue="Hello World"
		helperText="You can't just Hello World anywhere!"
	/>
))

.add('Disabled State', () => (
	<TextInput
		disabled
		id="standard-disabled"
		label="Disabled"
		value="Hello World"
	/>
))

.add('Password Field', () => (
	<TextInput
		secureTextEntry
		id="standard-password-input"
		label="Password"
		autoComplete="password"
	/>
))

.add('Multiline Flexible', () => (
	<TextInput
		id="standard-multiline-flexible"
		label="Multiline"
		multiline
	/>
))


.add('Multiline Static', () => (
	<TextInput
		id="standard-multiline-static"
		label="Multiline"
		multiline
		numberOfLines={4}
		defaultValue="Default Value"
	/>
))

.add('Placeholder', () => (
	<TextInput
		id="standard-with-placeholder"
		label="With placeholder"
		placeholder="Placeholder"
	/>
))

.add('With placeholder multiline', () => (
	<TextInput
		id="standard-textarea"
		label="With placeholder multiline"
		placeholder="Placeholder"
		multiline
	/>
))

.add('Number Field', () => (
	<TextInput
		id="standard-number"
		label="Number"
		type="number"
	/>
))

.add('Search field', () => (
	<TextInput
		id="standard-search"
		label="Search field"
		type="search"
	/>
));

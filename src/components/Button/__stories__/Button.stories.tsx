import { Button, /*ButtonProps*/ } from '@bluebase/components';
import React from 'react';
import { action } from '@storybook/addon-actions';
// import { getComponent } from '@bluebase/core';
import storiesOf from '@bluebase/storybook-addon';
import { withInfo } from '@storybook/addon-info';
import { withKnobs } from '@storybook/addon-knobs';

// const Button = getComponent<ButtonProps>('Button');

const stories = storiesOf('Button', module);

stories.addDecorator(withInfo);
stories.addDecorator(withKnobs);

stories

	.add('Contained Buttons', () => (
		<React.Fragment>
			<Button variant="contained" onPress={action('button-press')}>
				Default
		</Button>
			<Button variant="contained" color="primary" onPress={action('button-press')}>
				Primary
		</Button>
			<Button variant="contained" color="secondary" onPress={action('button-press')}>
				Secondary
		</Button>
			<Button variant="contained" color="secondary" disabled onPress={action('button-press')}>
				Disabled
		</Button>
			<Button variant="contained" onPress={action('button-press')}>
				Link
		</Button>
		</React.Fragment>
	))

	.add('Text Buttons', () => (
		<React.Fragment>
			<Button>Default</Button>
			<Button color="primary">
				Primary
		</Button>
			<Button color="secondary">
				Secondary
		</Button>
			<Button disabled>
				Disabled
		</Button>
			<Button>
				Link
		</Button>
		</React.Fragment>
	))

	.add('Outlined Buttons', () => (
		<React.Fragment>
			<Button variant="outlined">
				Default
		</Button>
			<Button variant="outlined" color="primary">
				Primary
		</Button>
			<Button variant="outlined" color="secondary">
				Secondary
		</Button>
			<Button variant="outlined" disabled>
				Disabled
		</Button>
			<Button variant="outlined">
				Link
		</Button>
		</React.Fragment>
	))

	.add('Sizes', () => (
		<React.Fragment>
			<Button size="small">
				Small
		</Button>
			<Button size="medium">
				Medium
		</Button>
			<Button size="large">
				Large
		</Button>
			<Button variant="outlined" size="small" color="primary">
				Small
		</Button>
			<Button variant="outlined" size="medium" color="primary">
				Medium
		</Button>
			<Button variant="outlined" size="large" color="primary">
				Large
		</Button>
			<Button variant="contained" size="small" color="primary">
				Small
		</Button>
			<Button variant="contained" size="medium" color="primary">
				Medium
		</Button>
			<Button variant="contained" size="large" color="primary">
				Large
		</Button>
		</React.Fragment>
	))


	.add('Width', () => (
		<React.Fragment>
			<Button color="primary">Normal</Button>
			<Button color="primary" fullWidth={true} >Full Width</Button>
		</React.Fragment>
	))


	.add('Title Prop', () => (
		<React.Fragment>
			<Button color="primary" title="Contained" variant="contained" />
			<Button color="secondary" title="Outlined" variant="outlined" />
			<Button color="primary" title="Text" variant="text" />
		</React.Fragment>
	))


	.add('spinner  Prop', () => (
		<React.Fragment>
			<Button color="secondary" loading={true} variant="contained" />
		</React.Fragment>
	));
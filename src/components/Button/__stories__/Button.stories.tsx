import { Button } from '@bluebase/components';
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
			<Button variant="contained" color="error" onPress={action('button-press')}>
				Error
			</Button>
			<Button variant="contained" color="warning" onPress={action('button-press')}>
				Warning
			</Button>
			<Button variant="contained" color="success" onPress={action('button-press')}>
				Success
			</Button>
			<Button variant="contained" color="error" disabled onPress={action('button-press')}>
				Disabled
			</Button>
		</React.Fragment>
	))

	.add('Text Buttons', () => (
		<React.Fragment>
			<Button variant="text">Default</Button>
			<Button variant="text" color="primary">
				Primary
			</Button>
			<Button variant="text" color="secondary">
				Secondary
			</Button>
			<Button variant="text" color="error" onPress={action('button-press')}>
				Error
			</Button>
			<Button variant="text" color="warning" onPress={action('button-press')}>
				Warning
			</Button>
			<Button variant="text" color="success" onPress={action('button-press')}>
				Success
			</Button>
			<Button variant="text" disabled>
				Disabled
			</Button>
		</React.Fragment>
	))

	.add('Outlined Buttons', () => (
		<React.Fragment>
			<Button variant="outlined">Default</Button>
			<Button variant="outlined" color="primary">
				Primary
			</Button>
			<Button variant="outlined" color="secondary">
				Secondary
			</Button>
			<Button variant="outlined" color="error" onPress={action('button-press')}>
				Error
			</Button>
			<Button variant="outlined" color="warning" onPress={action('button-press')}>
				Warning
			</Button>
			<Button variant="outlined" color="success" onPress={action('button-press')}>
				Success
			</Button>
			<Button variant="outlined" disabled>
				Disabled
			</Button>
		</React.Fragment>
	))

	.add('Sizes', () => (
		<React.Fragment>
			<Button size="small">Small</Button>
			<Button size="medium">Medium</Button>
			<Button size="large">Large</Button>
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
			<Button color="primary" fullWidth={true}>
				Full Width
			</Button>
		</React.Fragment>
	))

	.add('Title Prop', () => (
		<React.Fragment>
			<Button color="primary" title="Contained" variant="contained" />
			<Button color="secondary" title="Outlined" variant="outlined" />
			<Button color="primary" title="Text" variant="text" />
		</React.Fragment>
	))

	.add('Loading Buttons', () => (
		<React.Fragment>
			<Button loading variant="contained" onPress={action('button-press')}>
				Default
			</Button>
			<Button loading variant="contained" color="primary" onPress={action('button-press')}>
				Primary
			</Button>
			<Button loading variant="contained" color="secondary" onPress={action('button-press')}>
				Secondary
			</Button>
			<Button
				loading
				variant="contained"
				// color="secondary"
				disabled
				onPress={action('button-press')}
			>
				Disabled
			</Button>
			<Button loading variant="contained" onPress={action('button-press')}>
				Link
			</Button>
			<Button loading variant="outlined" color="primary" onPress={action('button-press')}>
				Primary
			</Button>
			<Button loading variant="text" color="secondary" onPress={action('button-press')}>
				Secondary
			</Button>
			<Button loading variant="outlined" color="primary" onPress={action('button-press')}>
				Primary
			</Button>
			<Button loading variant="text" color="#000000" onPress={action('button-press')}>
				Custom
			</Button>
			<Button loading variant="outlined" color="error" onPress={action('button-press')}>
				Error
			</Button>
			<Button loading variant="text" color="success" onPress={action('button-press')}>
				Success
			</Button>
		</React.Fragment>
	))

	.add('Icon Buttons', () => (
		<React.Fragment>
			<Button
				icon={{ type: 'icon', name: 'favorite' }}
				variant="contained"
				color="primary"
				onPress={action('button-press')}
			>
				Default
			</Button>
			<Button
				icon={{ type: 'icon', name: 'favorite' }}
				variant="contained"
				color="primary"
				onPress={action('button-press')}
			>
				Primary
			</Button>
			<Button
				icon={{ type: 'icon', name: 'favorite' }}
				variant="contained"
				color="secondary"
				onPress={action('button-press')}
			>
				Secondary
			</Button>
			<Button
				icon={{ type: 'icon', name: 'favorite' }}
				variant="contained"
				color="secondary"
				disabled
				onPress={action('button-press')}
			>
				Disabled
			</Button>
			<Button
				icon={{ type: 'icon', name: 'favorite' }}
				variant="contained"
				onPress={action('button-press')}
			>
				Link
			</Button>
		</React.Fragment>
	))
	.add('Disabled Buttons', () => (
		<React.Fragment>
			<Button disabled variant="contained" color="primary" onPress={action('button-press')}>
				Disabled Primary Contained
			</Button>
			<Button disabled variant="outlined" color="error" onPress={action('button-press')}>
				Disabled Error Outlined
			</Button>
			<Button disabled variant="text" color="success" onPress={action('button-press')}>
				Disabled Success Text
			</Button>
			<Button disabled loading variant="contained" color="error" onPress={action('button-press')}>
				Disabled Loading
			</Button>
			<Button
				icon={{ type: 'icon', name: 'favorite' }}
				variant="contained"
				color="secondary"
				disabled
				onPress={action('button-press')}
			>
				Disabled Icon
			</Button>
		</React.Fragment>
	));

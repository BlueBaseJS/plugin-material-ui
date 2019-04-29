import React from 'react';
import { SwitchProps } from '@bluebase/components';
// import { View } from 'react-native';
import { View } from 'react-native';
import { action } from '@storybook/addon-actions';
import { getComponent } from '@bluebase/core';
import storiesOf from '@bluebase/storybook-addon';
import { withInfo } from '@storybook/addon-info';
import { withKnobs } from '@storybook/addon-knobs';

const Switch = getComponent<SwitchProps>('Switch');

const stories = storiesOf('Switch', module);

stories.addDecorator(withInfo);
stories.addDecorator(withKnobs);

stories

	.add('Color: undefined', () => (
		<View style={{ paddingHorizontal: 20 }}>
			<Switch
				onValueChange={action('Checked D')}
			/>
			<Switch
				onValueChange={action('Checked D')}
				label="Unchecked"
				checked={false}
			/>
			<Switch
				onValueChange={action('Checked D')}
				label="Checked"
				checked
			/>
			<Switch
				onValueChange={action('Checked D')}
				label="Unchecked (Disabled)"
				disabled
			/>
			<Switch
				onValueChange={action('Checked D')}
				label="Checked (Disabled)"
				checked
				disabled
			/>
		</View>
	))

	.add('Color: Primary', () => (
		<View style={{ paddingHorizontal: 20 }}>
			<Switch
				onValueChange={action('Checked D')}
				color="primary"
			/>
			<Switch
				onValueChange={action('Checked D')}
				color="primary"
				label="Unchecked"
				checked={false}
			/>
			<Switch
				onValueChange={action('Checked D')}
				color="primary"
				label="Checked"
				checked
			/>
			<Switch
				onValueChange={action('Checked D')}
				color="primary"
				label="Unchecked (Disabled)"
				disabled
			/>
			<Switch
				onValueChange={action('Checked D')}
				color="primary"
				label="Checked (Disabled)"
				checked
				disabled
			/>
		</View>
	))

	.add('Color: Secondary', () => (
		<View style={{ paddingHorizontal: 20 }}>
			<Switch
				onValueChange={action('Checked D')}
				color="secondary"
			/>
			<Switch
				onValueChange={action('Checked D')}
				color="secondary"
				label="Unchecked"
				checked={false}
			/>
			<Switch
				onValueChange={action('Checked D')}
				color="secondary"
				label="Checked"
				checked
			/>
			<Switch
				onValueChange={action('Checked D')}
				color="secondary"
				label="Unchecked (Disabled)"
				disabled
			/>
			<Switch
				onValueChange={action('Checked D')}
				color="secondary"
				label="Checked (Disabled)"
				checked
				disabled
			/>
		</View>
	))

	.add('Color: Default', () => (
		<View style={{ paddingHorizontal: 20 }}>
			<Switch
				onValueChange={action('Checked D')}
				color="default"
			/>
			<Switch
				onValueChange={action('Checked D')}
				color="default"
				label="Unchecked"
				checked={false}
			/>
			<Switch
				onValueChange={action('Checked D')}
				color="default"
				label="Checked"
				checked
			/>
			<Switch
				onValueChange={action('Checked D')}
				color="default"
				label="Unchecked (Disabled)"
				disabled
			/>
			<Switch
				onValueChange={action('Checked D')}
				color="default"
				label="Checked (Disabled)"
				checked
				disabled
			/>
		</View>
	))

	.add('Color: Custom', () => (
		<View style={{ paddingHorizontal: 20 }}>
			<Switch
				onValueChange={action('Checked D')}
				color="#9c27b0"
			/>
			<Switch
				onValueChange={action('Checked D')}
				color="#9c27b0"
				label="Unchecked"
				checked={false}
			/>
			<Switch
				onValueChange={action('Checked D')}
				color="yellow"
				label="Checked"
				checked
			/>
			<Switch
				onValueChange={action('Checked D')}
				color="#9c27b0"
				label="Unchecked (Disabled)"
				disabled
			/>
			<Switch
				onValueChange={action('Checked D')}
				color="#9c27b0"
				label="Checked (Disabled)"
				checked
				disabled
			/>
		</View>
	))

	.add('Label Placement', () => (
		<View style={{ paddingHorizontal: 20 }}>
			<Switch
				onValueChange={action('Checked D')}
				label="Undefined"
				checked
			/>
			<Switch
				onValueChange={action('Checked D')}
				label="bottom"
				labelPlacement="bottom"
				checked
			/>
			<Switch
				onValueChange={action('Checked D')}
				label="end"
				labelPlacement="end"
				checked
			/>
			<Switch
				onValueChange={action('Checked D')}
				label="start"
				labelPlacement="start"
				checked
			/>
			<Switch
				onValueChange={action('Checked D')}
				label="top"
				labelPlacement="top"
				checked
			/>
		</View>
	))
	;
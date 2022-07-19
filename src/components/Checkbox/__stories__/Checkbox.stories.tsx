import { CheckboxProps } from '@bluebase/components';
import { getComponent } from '@bluebase/core';
import storiesOf from '@bluebase/storybook-addon';
import { action } from '@storybook/addon-actions';
import { withInfo } from '@storybook/addon-info';
import { withKnobs } from '@storybook/addon-knobs';
import React from 'react';
// import { View } from 'react-native';
import { View } from 'react-native';

const Checkbox = getComponent<CheckboxProps>('Checkbox');

const stories = storiesOf('Checkbox', module);

stories.addDecorator(withInfo);
stories.addDecorator(withKnobs);

stories

	.add('Color: undefined', () => (
		<View style={{ paddingHorizontal: 20 }}>
			<Checkbox
				onValueChange={action('Checked')}
			/>
			<Checkbox
				onValueChange={action('Checked')}
				label="Unchecked"
				checked={false}
			/>
			<Checkbox
				onValueChange={action('Checked')}
				label="Checked"
				checked
			/>
			<Checkbox
				onValueChange={action('Checked')}
				label="Unchecked (Disabled)"
				disabled
			/>
			<Checkbox
				onValueChange={action('Checked')}
				label="Checked (Disabled)"
				checked
				disabled
			/>
			<Checkbox
				onValueChange={action('Checked')}
				label="Unchecked (Indeterminate)"
				indeterminate
			/>
			<Checkbox
				onValueChange={action('Checked')}
				label="Checked (Indeterminate)"
				checked
				indeterminate
			/>
		</View>
	))

	.add('Color: Primary', () => (
		<View style={{ paddingHorizontal: 20 }}>
			<Checkbox
				onValueChange={action('Checked')}
				color="primary"
			/>
			<Checkbox
				onValueChange={action('Checked')}
				color="primary"
				label="Unchecked"
				checked={false}
			/>
			<Checkbox
				onValueChange={action('Checked')}
				color="primary"
				label="Checked"
				checked
			/>
			<Checkbox
				onValueChange={action('Checked')}
				color="primary"
				label="Unchecked (Disabled)"
				disabled
			/>
			<Checkbox
				onValueChange={action('Checked')}
				color="primary"
				label="Checked (Disabled)"
				checked
				disabled
			/>
			<Checkbox
				onValueChange={action('Checked')}
				color="primary"
				label="Unchecked (Indeterminate)"
				indeterminate
			/>
			<Checkbox
				onValueChange={action('Checked')}
				color="primary"
				label="Checked (Indeterminate)"
				checked
				indeterminate
			/>
		</View>
	))

	.add('Color: Secondary', () => (
		<View style={{ paddingHorizontal: 20 }}>
			<Checkbox
				onValueChange={action('Checked')}
				color="secondary"
			/>
			<Checkbox
				onValueChange={action('Checked')}
				color="secondary"
				label="Unchecked"
				checked={false}
			/>
			<Checkbox
				onValueChange={action('Checked')}
				color="secondary"
				label="Checked"
				checked
			/>
			<Checkbox
				onValueChange={action('Checked')}
				color="secondary"
				label="Unchecked (Disabled)"
				disabled
			/>
			<Checkbox
				onValueChange={action('Checked')}
				color="secondary"
				label="Checked (Disabled)"
				checked
				disabled
			/>
			<Checkbox
				onValueChange={action('Checked')}
				color="secondary"
				label="Unchecked (Indeterminate)"
				indeterminate
			/>
			<Checkbox
				onValueChange={action('Checked')}
				color="secondary"
				label="Checked (Indeterminate)"
				checked
				indeterminate
			/>
		</View>
	))

	.add('Color: Default', () => (
		<View style={{ paddingHorizontal: 20 }}>
			<Checkbox
				onValueChange={action('Checked')}
				color="default"
			/>
			<Checkbox
				onValueChange={action('Checked')}
				color="default"
				label="Unchecked"
				checked={false}
			/>
			<Checkbox
				onValueChange={action('Checked')}
				color="default"
				label="Checked"
				checked
			/>
			<Checkbox
				onValueChange={action('Checked')}
				color="default"
				label="Unchecked (Disabled)"
				disabled
			/>
			<Checkbox
				onValueChange={action('Checked')}
				color="default"
				label="Checked (Disabled)"
				checked
				disabled
			/>
			<Checkbox
				onValueChange={action('Checked')}
				color="default"
				label="Unchecked (Indeterminate)"
				indeterminate
			/>
			<Checkbox
				onValueChange={action('Checked')}
				color="default"
				label="Checked (Indeterminate)"
				checked
				indeterminate
			/>
		</View>
	))

	.add('Color: Custom', () => (
		<View style={{ paddingHorizontal: 20 }}>
			<Checkbox
				onValueChange={action('Checked')}
				color="#9c27b0"
			/>
			<Checkbox
				onValueChange={action('Checked')}
				color="#9c27b0"
				label="Unchecked"
				checked={false}
			/>
			<Checkbox
				onValueChange={action('Checked')}
				color="#9c27b0"
				label="Checked"
				checked
			/>
			<Checkbox
				onValueChange={action('Checked')}
				color="#9c27b0"
				label="Unchecked (Disabled)"
				disabled
			/>
			<Checkbox
				onValueChange={action('Checked')}
				color="#9c27b0"
				label="Checked (Disabled)"
				checked
				disabled
			/>
			<Checkbox
				onValueChange={action('Checked')}
				color="#9c27b0"
				label="Unchecked (Indeterminate)"
				indeterminate
			/>
			<Checkbox
				onValueChange={action('Checked')}
				color="#9c27b0"
				label="Checked (Indeterminate)"
				checked
				indeterminate
			/>
		</View>
	))

	.add('Label Placement', () => (
		<View style={{ paddingHorizontal: 20 }}>
			<Checkbox
				onValueChange={action('Checked')}
				label="Undefined"
				checked
			/>
			<Checkbox
				onValueChange={action('Checked')}
				label="bottom"
				labelPlacement="bottom"
				checked
			/>
			<Checkbox
				onValueChange={action('Checked')}
				label="end"
				labelPlacement="end"
				checked
			/>
			<Checkbox
				onValueChange={action('Checked')}
				label="start"
				labelPlacement="start"
				checked
			/>
			<Checkbox
				onValueChange={action('Checked')}
				label="top"
				labelPlacement="top"
				checked
			/>
		</View>
	))
;
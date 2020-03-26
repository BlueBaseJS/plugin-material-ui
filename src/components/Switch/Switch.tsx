import FormControlLabel from '@material-ui/core/FormControlLabel';
import MUISwitch from '@material-ui/core/Switch';
import React from 'react';
import { StyleSheet } from 'react-native';
import { SwitchProps } from '@bluebase/components';
import { objectMapper } from '@bluebase/component-mapper';
import { styles } from './styles';
import { withPropsStyles } from '../../withPropsStyles';

MUISwitch.displayName = 'Switch';
FormControlLabel.displayName = 'FormControlLabel';

const map = {
	// If color is primary, secondary or default set as is
	color: ({ color }: SwitchProps) => {
		if (color === 'primary' || color === 'secondary' || color === 'default') {
			return color;
		}

		return;
	},

	onChange: ({ onChange, onValueChange }: any) => (event: any, checked: boolean) => {
		if (onChange) {
			onChange(event, checked);
		}

		if (onValueChange) {
			onValueChange(event.target.value, checked);
		}
	},

	checked: 'checked',
	classes: 'classes',
	disabled: 'disabled',
	id: 'id',
	label: 'label',
	labelPlacement: 'labelPlacement',
	name: 'name',
	style: ({ style }: SwitchProps) => StyleSheet.flatten(style),
	value: 'value',
};

export const Switch = withPropsStyles(styles)((props: SwitchProps) => {
	const newProps = objectMapper(props, map);

	const { label, labelPlacement, classes, ...common } = newProps;

	if (classes.color) {
		delete common.color;
	}

	const { label: labelClass, labelPlacementStart, ...switchClasses } = classes;

	const node = <MUISwitch classes={switchClasses} {...common} />;

	if (!label) {
		return node;
	}

	return (
		<FormControlLabel
			{...common}
			value={common.value}
			label={label}
			labelPlacement={labelPlacement}
			control={node}
			classes={{ label: labelClass, labelPlacementStart }}
		/>
	);
}) as React.ComponentType<SwitchProps>;

import FormControlLabel from '@material-ui/core/FormControlLabel';
import MUISwitch from '@material-ui/core/Switch';
import React from 'react';
import { StyleSheet } from 'react-native';
import { SwitchProps } from '@bluebase/components';
import { objectMapper } from '@bluebase/component-mapper';
import { styles } from './styles';
import { withStyles } from '@material-ui/core/styles';

(MUISwitch as React.ComponentType).displayName = 'Switch';
(FormControlLabel as React.ComponentType).displayName = 'FormControlLabel';

const map = {
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

export const Switch = withStyles(styles)((props: SwitchProps) => {
	const newProps = objectMapper(props, map);

	const { label, labelPlacement, classes, color, ...common } = newProps;

	if (classes.color) {
		delete common.color;
	}

	const { label: labelClass, labelPlacementStart, ...switchClasses } = classes;

	const node = <MUISwitch classes={switchClasses} {...common} color="default" />;

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
});

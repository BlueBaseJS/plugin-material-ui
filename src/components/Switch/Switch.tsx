import FormControlLabel from '@material-ui/core/FormControlLabel';
import MUISwitch from '@material-ui/core/Switch';
import React from 'react';
import { SwitchProps } from '@bluebase/components';
import { objectMapper } from '@bluebase/component-mapper';
import { styles } from './styles';
import { withPropsStyles } from '../../withPropsStyles';



const map = {
	// If color is primary, secondary or default set as is
	color: ({ color }: SwitchProps) => {
		if (color === 'primary' || color === 'secondary' || color === 'default') {
			return color;
		}

		return;
	},

	onChange: ({ onChange, onValueChange }: any) => (event: any, checked: boolean)  => {
		if (onChange) {
			onChange(event, checked);
		}

		if (onValueChange) {
			onValueChange(event.target.value, checked);
		}
	}

};

export const Switch = withPropsStyles(styles)((props: SwitchProps) => {

	const newProps = objectMapper(props, map, { rest: true, ignore: ['onValueChange'] });

	const { label, labelPlacement, classes, ...common } = newProps;

	if (Object.keys(classes).length > 0) {
		delete common.color;
	}

	const { label: labelClass, labelPlacementStart, ...switchClasses } = classes;

	const node = (<MUISwitch classes={switchClasses} {...common} />
	);

	if (!label) {
		return node;
	}

	return (
		<FormControlLabel
			{...common}
			label={label}
			labelPlacement={labelPlacement}
			control={node}
			classes={{ label: labelClass, labelPlacementStart }}
		/>
	);
}) as React.ComponentType<SwitchProps>;

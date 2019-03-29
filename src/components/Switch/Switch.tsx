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

	onChange: ({ onChange, onValueChange }: any) => (event: object, checked: boolean)  => {
		if (onChange) {
			onChange(event, checked);
		}

		if (onValueChange) {
			onValueChange(checked);
		}
	}

};

export const Switch = withPropsStyles(styles)((props: SwitchProps) => {

	const { label } = props;

	const newProps = objectMapper(props, map, { rest: true, ignore: ['onValueChange'] });

	if (Object.keys(newProps.classes).length > 0) {
		delete newProps.color;
	}

	const node = <MUISwitch {...newProps} />;

	if (!label) {
		return node;
	}

	return (<FormControlLabel {...newProps} control={node} />);
}) as React.ComponentType<SwitchProps>;
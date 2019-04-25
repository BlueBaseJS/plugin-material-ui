import { CheckboxProps } from '@bluebase/components';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import MUICheckbox from '@material-ui/core/Checkbox';
import React from 'react';
import { objectMapper } from '@bluebase/component-mapper';
import { withPropsStyles } from '../../withPropsStyles';

const styles = ({ color }: CheckboxProps, theme: any) => {

	// If color is NOT primary, secondary or default then create custom styles
	if (color === 'primary' || color === 'secondary' || color === 'default') {
		return {};
	}

	// If color is undefined, then use defaults
	if (color === undefined) {
		return {};
	}

	return {
		root: {
			// color,
			color:theme.palette.color,
			// tslint:disable-next-line: object-literal-sort-keys
			'&$hover': {
				color,
			},
			'&$disabled': {
				color: theme.palette.action.disabled,
			},
		},
		// tslint:disable-next-line: object-literal-sort-keys
		checked: {},
		disabled: {},
	};
};

const map = {
	// If color is primary, secondary or default set as is
	color: ({ color }: CheckboxProps) => {
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

export const Checkbox = withPropsStyles(styles)((props: CheckboxProps) => {

	const newProps = objectMapper(props, map, { rest: true, ignore: ['onValueChange'] });

	const { label, labelPlacement, classes, indeterminate, ...common } = newProps;

	if (Object.keys(classes).length > 0) {
		delete common.color;
	}

	const node = (
		<MUICheckbox
			classes={classes}
			indeterminate={indeterminate}
			{...common}
		/>
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
		/>
	);
}) as any;

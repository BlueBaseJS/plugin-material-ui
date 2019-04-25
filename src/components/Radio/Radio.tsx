import FormControlLabel from '@material-ui/core/FormControlLabel';
import MUIRadio from '@material-ui/core/Radio';
import { RadioProps } from '@bluebase/components';
import React from 'react';
import { objectMapper } from '@bluebase/component-mapper';
import { withPropsStyles } from '../../withPropsStyles';

const styles = ({ color }: RadioProps, theme: any) => {

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
			// tslint:disable-next-line: object-literal-sort-keys
			'&$checked': {
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
	color: ({ color }: RadioProps) => {
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

export const Radio = withPropsStyles(styles)((props: RadioProps) => {

	const newProps = objectMapper(props, map, { rest: true, ignore: ['onValueChange'] });

	const { label, labelPlacement, classes, ...common } = newProps;

	if (Object.keys(classes).length > 0) {
		delete common.color;
	}

	const node = (
		<MUIRadio
			classes={classes}
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
}) as React.ComponentType<RadioProps>;

import { Theme, useTheme } from '@bluebase/core';

import { CheckboxProps } from '@bluebase/components';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import MUICheckbox from '@material-ui/core/Checkbox';
import React from 'react';
import { makeStyles } from '@material-ui/core';
import { objectMapper } from '@bluebase/component-mapper';

(MUICheckbox as React.ComponentType).displayName = 'Checkbox';

interface CheckboxPropsWithTheme extends CheckboxProps {
	theme: Theme
}

const useStyles = makeStyles({
	checked: ({ color, theme }: CheckboxPropsWithTheme) => {
		// If color is undefined, then use defaults
		if (color === 'default') {
			return {};
		}
		// If color is undefined, then use defaults
		if (color === undefined) {
			color = theme.palette.secondary.main;
		}

		// If color is NOT primary, secondary or default then create custom styles
		if (color === 'primary' || color === 'secondary') {
			color = theme.palette[color].main;
		}

		return {
			color
		};
	},

	disabled: ({ theme }: CheckboxPropsWithTheme) => ({
		color: theme.palette.action.disabled,
	}),
});

const map = {
	onChange: ({ onChange, onValueChange }: any) => (event: any, checked: boolean) => {
		if (onChange) {
			onChange(event, checked);
		}

		if (onValueChange) {
			onValueChange(event.target.value, checked);
		}
	},
};

export const Checkbox = (props: CheckboxProps) => {
	const newProps = objectMapper(props, map, { rest: true, ignore: ['onValueChange'] });
	const { label, labelPlacement, indeterminate, ...common } = newProps;

	const { theme } = useTheme();
	const classes = useStyles({...props, theme});

	const node = <MUICheckbox classes={classes} indeterminate={indeterminate} {...common} color="default" />;

	if (!label) {
		return node;
	}

	return (
		<FormControlLabel {...common} label={label} labelPlacement={labelPlacement} control={node} />
	);
};

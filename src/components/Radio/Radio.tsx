import { Theme, useTheme } from '@bluebase/core';

import FormControlLabel from '@material-ui/core/FormControlLabel';
import MUIRadio from '@material-ui/core/Radio';
import { RadioProps } from '@bluebase/components';
import React from 'react';
import { makeStyles } from '@material-ui/core';
import { noop } from '../../helpers';
import { objectMapper } from '@bluebase/component-mapper';

interface RadioPropsWithTheme extends RadioProps {
	theme: Theme
}

const useStyles = makeStyles({
	checked: ({ color, theme }: RadioPropsWithTheme) => {
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

	disabled: ({ theme }: RadioPropsWithTheme) => ({
		color: theme.palette.action.disabled,
	}),
});

const map = {
	onChange: (props: any) => (event: any, checked: boolean) => {
		props.onChange?.(event, checked);
		props.onValueChange?.(event.target.value, checked);
	},
};

export const Radio = (props: RadioProps) => {
	const newProps = objectMapper(props, map, { rest: true, ignore: ['onValueChange'] });

	const { label, labelPlacement, color, ...common } = newProps;

	const { theme } = useTheme();
	const classes = useStyles({...props, theme});

	const node = <MUIRadio classes={classes} {...common} color="default" />;

	if (!label) {
		return node;
	}

	return (
		<FormControlLabel {...common} label={label} labelPlacement={labelPlacement} control={node} />
	);
};

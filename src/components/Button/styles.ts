import { SwitchProps } from '@bluebase/components';
import { Theme } from '@bluebase/core';
import { Theme as MuiTheme } from '@material-ui/core';
import { fade } from '@material-ui/core/styles/colorManipulator';

export const styles = ({ color }: SwitchProps, muiTheme: MuiTheme, theme: Theme) => {
	if (!color || color === 'default') {
		return;
	}

	const colors: {
		hover?: string;
		main?: string;
		text?: string;
	} = {};

	// If color is NOT primary, secondary or default then create custom styles
	if (
		color === 'primary' ||
		color === 'secondary' ||
		color === 'success' ||
		color === 'error' ||
		color === 'warning'
	) {
		colors.hover = (theme.palette as any)[color].dark;
		colors.main = (theme.palette as any)[color].main;
		colors.text = (theme.palette as any)[color].contrastText;
	} else {
		colors.hover = color;
		colors.main = color;
		colors.text = muiTheme.palette.getContrastText(color);
	}

	return {
		contained: {},
		outlined: {},
		// text: {},

		root: {
			'&$contained': {
				backgroundColor: colors.main,
				color: colors.text,

				'&:hover': {
					backgroundColor: colors.hover,
				},
			},
			/* Styles applied to the root element if `variant="outlined"` and `color="primary"`. */
			'&$outlined': {
				'&:hover': {
					'@media (hover: none)': {
						backgroundColor: 'transparent',
					},
					backgroundColor: fade(colors.main as string, theme.palette.action.hoverOpacity),
					border: `1px solid ${colors.main as string}`,
					// Reset on touch devices, it doesn't add specificity
				},
				border: `1px solid ${fade(colors.main as string, 0.5)}`,
				color: colors.main,
			},
			'&$text': {
				'&:hover': {
					'@media (hover: none)': {
						backgroundColor: 'transparent',
					},
					backgroundColor: fade(colors.main as string, theme.palette.action.hoverOpacity),
					// Reset on touch devices, it doesn't add specificity
				},
				color: colors.main,
			},
		},
		/* Styles applied to the root element if `variant="text"` */
		text: {},
	};
};

import { SwitchProps } from '@bluebase/components';
import { Theme } from '@bluebase/core';
import { Theme as MuiTheme } from '@material-ui/core';
import { fade } from '@material-ui/core/styles/colorManipulator';

export const styles = ({ color }: SwitchProps, muiTheme: MuiTheme, theme: Theme ) => {

	if (!color || color === 'default') {
		return;
	}

	const colors: {
		hover?: string,
		main?: string,
		text?: string,
	} = {};

	// If color is NOT primary, secondary or default then create custom styles
	if (color === 'primary' || color === 'secondary' || color === 'success' || color === 'error' || color === 'warning') {
		colors.hover = (theme.palette as any)[color].dark;
		colors.main = (theme.palette as any).main;
		colors.text = (theme.palette as any).contrastText;
	}
	else {
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

			'&$text': {
				color: colors.main,
				'&:hover': {
					backgroundColor: fade(colors.main as string, theme.palette.action.hoverOpacity),
					// Reset on touch devices, it doesn't add specificity
					'@media (hover: none)': {
						backgroundColor: 'transparent',
					},
				},
			},


			/* Styles applied to the root element if `variant="outlined"` and `color="primary"`. */
			'&$outlined': {
				color: colors.main,
				border: `1px solid ${fade(colors.main as string, 0.5)}`,
				'&:hover': {
					border: `1px solid ${colors.main as string}`,
					backgroundColor: fade(colors.main as string, theme.palette.action.hoverOpacity),
					// Reset on touch devices, it doesn't add specificity
					'@media (hover: none)': {
						backgroundColor: 'transparent',
					},
				},
			},
		},


		/* Styles applied to the root element if `variant="text"` */
		text: {
		},
	};
};

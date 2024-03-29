import { ButtonProps } from '@bluebase/components';
import { Theme } from '@bluebase/core';
import { makeStyles, Theme as ThemeMui } from '@material-ui/core';
import { alpha } from '@material-ui/core/styles';

export interface ButtonPropsWithThemes extends ButtonProps {
	muiTheme: ThemeMui;
	theme: Theme;
}

export const useStyles = makeStyles({
	contained: (props: ButtonPropsWithThemes) => {
		const { color, disabled, muiTheme, theme } = props;

		if (!color || (color === 'default' && !disabled) || disabled) {
			return {};
		}

		const colors = getButtonColors(props, muiTheme, theme);

		return {
			backgroundColor: colors.main,
			color: colors.text,

			'&:hover': {
				backgroundColor: colors.hover,
			},
		};
	},

	outlined: (props: ButtonPropsWithThemes) => {
		const { color, disabled, muiTheme, theme } = props;

		if (!color || (color === 'default' && !disabled) || disabled) {
			return {};
		}

		const colors = getButtonColors(props, muiTheme, theme);

		return {
			border: `1px solid ${alpha(colors.main as string, 0.5)}`,
			color: colors.main,

			'&:hover': {
				'@media (hover: none)': {
					backgroundColor: 'transparent',
				},
				backgroundColor: alpha(colors.hover as string, theme.palette.action.hoverOpacity),
				border: `1px solid ${colors.main as string}`,
				// Reset on touch devices, it doesn't add specificity
			},
		};
	},

	text: (props: ButtonPropsWithThemes) => {
		const { color, disabled, muiTheme, theme } = props;

		if (!color || (color === 'default' && !disabled) || disabled) {
			return {};
		}

		const colors = getButtonColors(props, muiTheme, theme);

		return {
			color: colors.main,

			'&:hover': {
				'@media (hover: none)': {
					backgroundColor: 'transparent',
				},
				backgroundColor: alpha(colors.hover as string, theme.palette.action.hoverOpacity),
				// Reset on touch devices, it doesn't add specificity
			},
		};
	},
});

export function getButtonColors(
	{ color, disabled, variant }: ButtonProps,
	muiTheme: ThemeMui,
	theme: Theme
) {
	const colors: {
		hover?: string;
		main?: string;
		text?: string;
	} = {
		// hover: theme.palette.primary.main,
		// main: theme.palette.primary.main,
		// text: theme.palette.text.primary,
	};

	if (disabled) {
		colors.hover = theme.palette.action.disabledBackground;
		colors.main = theme.palette.action.disabledBackground;
		colors.text = theme.palette.action.disabled;
		return colors;
	}

	if (!color || (color === 'default' && !disabled)) {
		return colors;
	}

	// If color is NOT primary, secondary or default then create custom styles
	if (
		color === 'primary' ||
		color === 'secondary' ||
		color === 'success' ||
		color === 'error' ||
		color === 'warning'
	) {
		if (variant === 'contained') {
			colors.hover = theme.palette[color].dark;
			colors.main = theme.palette[color].main;
			colors.text = theme.palette[color].contrastText;
		} else {
			colors.hover = theme.palette[color].dark;
			colors.main = theme.palette[color].main;
			colors.text = theme.palette[color].contrastText;
		}
	} else {
		colors.hover = color;
		colors.main = color;
		colors.text = muiTheme.palette.getContrastText(color);
	}

	return colors;
}

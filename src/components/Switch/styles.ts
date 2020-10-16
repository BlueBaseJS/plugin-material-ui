import { SwitchProps } from '@bluebase/components';
import { Theme } from '@material-ui/core';

export const styles = (theme: Theme) => ({
	label: {},
	labelPlacementStart: {
		marginLeft: 0,

		'& $label': {
			flex: 1,
		},
	},

	switchBase: {},

	checked: ({ color }: SwitchProps) => {
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
			color: color,

			'& + $track': {
				backgroundColor: color,
			},
		};
	},

	track: ({ color, checked }: SwitchProps) => {
		// If color is undefined, then use defaults
		if (!checked || color === 'default') {
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
			backgroundColor: color,
		};
	},

	disabled: {
		'& + $track': {
			opacity: theme.palette.type === 'light' ? 0.12 : 0.1,
		},

		'& $icon': {
			boxShadow: theme.shadows[1],
		},

		'&$switchBase': {
			color: theme.palette.type === 'light' ? theme.palette.grey[400] : theme.palette.grey[800],

			'& + $track': {
				backgroundColor:
					theme.palette.type === 'light' ? theme.palette.common.black : theme.palette.common.white,
			},
		},
	},
});

import { SwitchProps } from '@bluebase/components';
import { Theme } from '@material-ui/core';

export const styles = ({ color }: SwitchProps, theme: Theme) => {
	const common = {
		label: {},
		labelPlacementStart: {
			marginLeft: 0,

			'& $label': {
				flex: 1,
			},
		},
	};

	// If color is NOT primary, secondary or default then create custom styles
	if (color === 'primary' || color === 'secondary' || color === 'default') {
		return common;
	}

	// If color is undefined, then use defaults
	if (color === undefined) {
		return common;
	}

	return {
		...common,

		checked: {},
		track: {},

		switchBase: {
			color: color,

			'&$checked': {
				color: color,
			},
			'&$checked + $track': {
				backgroundColor: color,
			},
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
						theme.palette.type === 'light'
							? theme.palette.common.black
							: theme.palette.common.white,
				},
			},
		},
	};
};

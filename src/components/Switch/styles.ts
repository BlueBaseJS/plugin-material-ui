import { SwitchProps } from '@bluebase/components';
import { Theme } from '@bluebase/core';
// import { Theme } from '@material-ui/core';

export const styles = ({ color }: SwitchProps, theme: Theme) => {
	// If color is NOT primary, secondary or default then create custom styles
	if (color === 'primary' || color === 'secondary' || color === 'default') {
		return {};
	}

	// If color is undefined, then use defaults
	if (color === undefined) {
		return {};
	}

	return {
		bar: {},
		checked: {},
		icon: {},
		switchBase: {
			// color,
			// tslint:disable-next-line: object-literal-sort-keys
			'&$checked': {
				color,
				// tslint:disable-next-line: object-literal-sort-keys
				'& + $bar': {
					backgroundColor: color,
				},
			},
		},

		disabled: {
			'& + $bar': {
				opacity: theme.mode === 'light' ? 0.12 : 0.1,
			},
			// tslint:disable-next-line: object-literal-sort-keys
			'& $icon': {
				boxShadow: theme.elevation(1),
			},
			'&$switchBase': {
				color: theme.mode === 'light' ? '#BDBDBD' : '#424242',
				// tslint:disable-next-line: object-literal-sort-keys
				'& + $bar': {
					backgroundColor:
						theme.mode === 'light'
							? '#000000'
							: '#FFFFFF',
				},
			},
		},
	};
};

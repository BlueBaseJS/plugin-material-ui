import { AvatarProps } from '@bluebase/components';
import { Theme } from '@bluebase/core';

export const styles = ({ color, size, style }: AvatarProps, _muiTheme: any, theme: Theme) => {
	let finalColor = color;

	if (
		color === 'primary' ||
		color === 'secondary' ||
		color === 'error' ||
		color === 'success' ||
		color === 'warning'
	) {
		finalColor = theme.palette[color].main;
	}

	return {
		root: {
			...style,

			height: size,
			width: size,
		},

		colorDefault: {
			color: finalColor,
		},
	};
};

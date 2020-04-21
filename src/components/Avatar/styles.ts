import { AvatarProps } from '@bluebase/components';
import { Theme } from '@bluebase/core';

export const styles = (
	{ color, size: Size, textStyle, style }: AvatarProps,
	_muiTheme: any,
	theme: Theme
) => {
	let finalColor = color;
	const size = Size || 56;

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
			...textStyle,

			fontSize: size * 0.6,
			height: size,
			width: size,
		},

		colorDefault: {
			color: finalColor,
		},
	};
};

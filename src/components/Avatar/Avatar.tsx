import { AvatarDefaultProps, AvatarProps, BlueBaseImage, Icon } from '@bluebase/components';

import MuiAvatar from '@material-ui/core/Avatar';
import React from 'react';
import { makeStyles } from '@material-ui/core';
import { useTheme } from '@bluebase/core';

const useStyles = makeStyles({
	root: (props: AvatarProps) => {
		const { textStyle, style } = props;
		const size = props.size ?? 56;

		return {
			...style as any,
			...textStyle,

			fontSize: size * 0.6,
			height: size,
			width: size,
		};
	},

	colorDefault: ({ color }: AvatarProps) => ({
		color,
	}),
});

export const Avatar: any = (props: AvatarProps) => {
	const { type, icon, size, image, text, ...rest } = props as any;

	const { theme } = useTheme();
	const classes = useStyles(props);
	const style: any = props.style;
	const variant = props.variant === 'circle' ? 'circular' : props.variant;

	const color = props.color || theme.palette.background.default;

	if (type === 'icon') {
		return (
			<MuiAvatar classes={classes} {...rest} variant={variant} style={style}>
				<Icon name={icon} color={color} size={size && size * 0.6} />
			</MuiAvatar>
		);
	}
	if (type === 'image') {
		return (
			<MuiAvatar classes={classes} {...rest} variant={variant} style={style}>
				<BlueBaseImage source={image} style={[{ height: size, width: size }, style]} />
			</MuiAvatar>
		);
	}

	return (
		<MuiAvatar  classes={classes} {...rest} variant={variant} style={{ ...style, color }}>
			{text}
		</MuiAvatar>
	);
};

Avatar.defaultProps = AvatarDefaultProps;

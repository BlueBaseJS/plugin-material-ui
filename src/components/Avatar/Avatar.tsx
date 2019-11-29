import { AvatarDefaultProps, AvatarProps, BlueBaseImage, Icon } from '@bluebase/components';

import MuiAvatar from '@material-ui/core/Avatar';
import React from 'react';
import { styles } from './styles';
import { withPropsStyles } from '../../withPropsStyles';

export const Avatar: any = withPropsStyles(styles)((props: AvatarProps) => {
	const { type, icon, color, size, image, text, ...rest } = props;
	const style: any = props.style;

	if (type === 'icon') {
		return (
			<MuiAvatar {...rest} style={style}>
				<Icon name={icon} color={color} size={size && size * 0.6} />
			</MuiAvatar>
		);
	}
	if (type === 'image') {
		return (
			<MuiAvatar {...rest} style={style}>
				<BlueBaseImage source={image} style={[{ height: size, width: size }, style]} />
			</MuiAvatar>
		);
	}

	return (
		<MuiAvatar {...rest} style={style}>
			{text}
		</MuiAvatar>
	);
});

Avatar.defaultProps = AvatarDefaultProps;

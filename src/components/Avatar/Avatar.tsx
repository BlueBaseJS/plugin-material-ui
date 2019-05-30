import { AvatarDefaultProps, AvatarProps, BlueBaseImage, Icon } from '@bluebase/components';

import MuiAvatar from '@material-ui/core/Avatar';
import React from 'react';

export const Avatar = (props: AvatarProps) => {

	const { type, icon, color,avatarColor, size, image, text, ...rest } = props;
	if (type === 'icon') {
		return (
			<MuiAvatar  style={{ height: size, width: size, backgroundColor:avatarColor }} {...rest}>
				<Icon name={icon} size={size} color={color} />
			</MuiAvatar>
		);
	}
	if (type === 'image') {
		return (
			<MuiAvatar style={{ height: size, width: size}}>
				<BlueBaseImage source={image} style={[{ height: size, width: size }, props.style]} />
			</MuiAvatar>
		);
	}

	return (
		<MuiAvatar {...rest}>
			{text}
		</MuiAvatar>
	);

};

Avatar.defaultProps = AvatarDefaultProps;

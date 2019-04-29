
import { AvatarDefaultProps, AvatarProps, BlueBaseImage, Icon } from '@bluebase/components';

import MuiAvatar from '@material-ui/core/Avatar';
import React from 'react';

export const Avatar = (props: AvatarProps) => {

	const { type, icon, color, size, image, text, ...rest } = props;
	if (type === 'icon') {
		return (
			<MuiAvatar {...rest}>
				<Icon name={icon} color={color} />
			</MuiAvatar>
		);
	}
	if (type === 'image') {
		return (
			<MuiAvatar>
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

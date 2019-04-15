
import { BlueBaseImage, Icon, Text } from '@bluebase/components';

import MuiAvatar from '@material-ui/core/Avatar';
import React from 'react';

export const Avatar = (props: any) => {

	const { type, icon, color, size, image, text, style } = props;
	if (type === 'icon') {
		return (
			<MuiAvatar {...props}>
				<Icon name={icon} color={color} size={size} />
			</MuiAvatar>
		);
	}
	if (type === 'image') {
		const ImageSource = image && image.uri ? { uri: image.uri } : props.image;
		return (
			<MuiAvatar {...props}>
				<BlueBaseImage source={ImageSource} style={style} />
			</MuiAvatar>
		);
	}

	return (
			<MuiAvatar {...props} >
				<Text style={style}>{text}</Text>
			</MuiAvatar>
	);

};

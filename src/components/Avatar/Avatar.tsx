
import { AvatarProps, Image, Text } from '@bluebase/components';
import Icon from '@material-ui/core/Icon';
import MuiAvatar from '@material-ui/core/Avatar';
import React from 'react';

export const Avatar = (props: AvatarProps) => {


	if (props.type === 'icon') {
		return (
			<MuiAvatar {...props} >
				<Icon>{props.icon}</Icon>
			</MuiAvatar >

		);
	}
	if (props.type === 'image') {

		// const source = props.image && props.image.uri ? props.image.uri : props.image;
		return (

			<MuiAvatar {...props} >
				<Image style={{ width: 100, height: 100 }} source={{ uri: props.image }} />
			</MuiAvatar>
		);
	}

	return (
		<MuiAvatar {...props} >
			<Text>{props.text}</Text>
		</MuiAvatar>
	);

};

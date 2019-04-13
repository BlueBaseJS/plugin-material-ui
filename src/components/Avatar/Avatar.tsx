import React from 'react';
import MuiAvatar from '@material-ui/core/Avatar';

export const Avatar = (props: any) => {

	const source = props.image && props.image.uri ? props.image.uri : props.image;
	return (
		<MuiAvatar  src={source} {...props} />
	);
};

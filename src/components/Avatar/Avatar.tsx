import MuiAvatar from '@material-ui/core/Avatar';
import React from 'react';

export const Avatar = (props: any) => {

	const source = props.image && props.image.uri ? props.image.uri : props.image;
	return (
		<MuiAvatar  src={source} {...props} />
	);
};

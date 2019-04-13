
import Icon from '@material-ui/core/Icon';
import MuiAvatar from '@material-ui/core/Avatar';
import React from 'react';
import { getComponent } from '@bluebase/components';

const Text = getComponent('Text');

export const Avatar = (props: any) => {


	if (props.type === 'icon') {
		return (
			<MuiAvatar {...props} >
				<Icon>{props.icon}</Icon>
			</MuiAvatar >

		);
	}
	if (props.type === 'image') {

		const source = props.image && props.image.uri ? props.image.uri : props.image;
		return (
			<MuiAvatar src={source} {...props} />
		);
	}

	return (
		<MuiAvatar {...props} >
			<Text>{props.text}</Text>
		</MuiAvatar>
	);

};

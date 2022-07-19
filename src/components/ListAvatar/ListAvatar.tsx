import { Avatar, AvatarProps } from '@bluebase/components';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import * as React from 'react';

export const ListAvatar = (props: AvatarProps) => {
	return (
		<ListItemAvatar>
			<Avatar {...props} />
		</ListItemAvatar>
	);
};

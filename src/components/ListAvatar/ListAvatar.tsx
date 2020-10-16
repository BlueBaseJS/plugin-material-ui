import  * as React from  'react';

import { Avatar, AvatarProps } from '@bluebase/components';

import ListItemAvatar from '@material-ui/core/ListItemAvatar';

export const ListAvatar = (props: AvatarProps) => {
	return(
		<ListItemAvatar>
			<Avatar  {...props} />
		</ListItemAvatar>
	);
};

import { Icon, ListIconDefaultProps, ListIconProps, } from '@bluebase/components';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import React from 'react';

export const ListIcon = (props: ListIconProps) => {
	return (
		<ListItemIcon>
			<Icon {...props} />
		</ListItemIcon>
	);
};

ListIcon.defaultProps = ListIconDefaultProps;

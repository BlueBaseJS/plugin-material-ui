import { Icon, ListIconDefaultProps, ListIconProps, } from '@bluebase/components';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import React from 'react';

export const ListIcon = (props: ListIconProps) => {
	const { size, ...others } = props;
	return (
		<ListItemIcon>
			<Icon {...others} />
		</ListItemIcon>
	);
};

ListIcon.defaultProps = ListIconDefaultProps;

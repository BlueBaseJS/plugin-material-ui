import { DrawerItemProps, List } from '@bluebase/components';
import ListItemText from '@material-ui/core/ListItemText';
import MUIListItem from '@material-ui/core/ListItem';
import React from 'react';

export const DrawerItem = (props: DrawerItemProps) => {

	const { active, disabled, icon, onPress, right, title } = props;

	return (
		<MUIListItem button={!!onPress} disabled={disabled} selected={active} onClick={onPress}>
			{icon ? <List.Icon size={24} {...icon} /> : null}
			{(title) ? <ListItemText inset={!!icon} primary={title} /> : null}
			{right}
		</MUIListItem>
	);
};

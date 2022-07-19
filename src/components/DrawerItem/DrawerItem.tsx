import { DrawerItemProps, List } from '@bluebase/components';
import React from 'react';

export const DrawerItem = (props: DrawerItemProps) => {
	const { active, disabled, icon, onPress, right, title } = props;

	return (
		<List.Item
			disabled={disabled}
			selected={active}
			onPress={onPress}
			left={icon ? <List.Icon size={24} {...icon} /> : null}
			title={title}
			right={right}
		/>
	);
};

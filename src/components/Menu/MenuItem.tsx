import { DynamicIcon, MenuItemDefaultProps, MenuItemProps } from '@bluebase/components';
import MuiMenuItem from '@material-ui/core/MenuItem';
import React from 'react';
import { StyleSheet } from 'react-native';

export const MenuItem = (props: MenuItemProps) => {
	const { title, disabled, icon, onPress, style } = props;
	return (
		<MuiMenuItem
			disabled={disabled}
			onClick={onPress}
			style={StyleSheet.flatten(style) as any}
		>
			{icon ? <DynamicIcon {...icon} /> : null}
			{title}
		</MuiMenuItem>
	);
};

MenuItem.defaultProps = MenuItemDefaultProps;

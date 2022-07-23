import { DynamicIcon, MenuItemDefaultProps, MenuItemProps } from '@bluebase/components';
import { useTheme } from '@bluebase/core';
import MuiMenuItem from '@material-ui/core/MenuItem';
import React from 'react';
import { StyleSheet } from 'react-native';

export const MenuItem = (props: MenuItemProps) => {
	const { title, disabled, icon, onPress, style } = props;
	const { theme } = useTheme();

	return (
		<MuiMenuItem
			disabled={disabled}
			onClick={onPress}
			style={StyleSheet.flatten(style) as any}
		>
			{icon ? (
				<DynamicIcon
					size={20}
					style={{ marginRight: theme.spacing.unit }}
					color={theme.palette.text.secondary}
					{...icon}
				/>
			) : null}
			{title}
		</MuiMenuItem>
	);
};

MenuItem.defaultProps = MenuItemDefaultProps;

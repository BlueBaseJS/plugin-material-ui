import { Body1, Body2, ListItemProps, View } from '@bluebase/components';
import ListItemText from '@material-ui/core/ListItemText';
import MUIListItem from '@material-ui/core/ListItem';
import React from 'react';
import { useTheme } from '@bluebase/core';
import { StyleSheet } from 'react-native';

export const ListItem = (props: ListItemProps) => {
	const {
		disabled, description, inset, left, onPress, right, selected, style, title,
		descriptionEllipsizeMode, titleEllipsizeMode, titleNumberOfLines, descriptionNumberOfLines, descriptionStyle, titleStyle
	} = props;

	const { theme } = useTheme();

	return (
		<MUIListItem
			button={!!onPress as any}
			disabled={disabled}
			selected={selected}
			onClick={onPress}
			style={StyleSheet.flatten([style as any])}
		>
			{left}
			{title || description ? (
				<ListItemText
				inset={inset}
				primary={
					<View>
						<Body1
						style={
							StyleSheet.flatten([
							{lineHeight: '1.5' as any},
							descriptionStyle,
							])
						}
						ellipsizeMode={titleEllipsizeMode}
						numberOfLines={titleNumberOfLines}
						>
							{title}
							</Body1>
					</View>
				}
				secondary={
					<View>
						<Body2
						style={
							StyleSheet.flatten([
							{lineHeight: '1.43' as any, color: theme.palette.text.secondary},
							descriptionStyle,
							])
						}
						ellipsizeMode={descriptionEllipsizeMode}
						numberOfLines={descriptionNumberOfLines}
						>
							{description}
							</Body2>
					</View>
				}
				disableTypography
				/>
			) : null}
			{right}
		</MUIListItem>
	);
};

import { Body1, Body2, ListItemProps, View } from '@bluebase/components';
import { useTheme } from '@bluebase/core';
import MUIListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import React from 'react';
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
							{
								typeof description === 'string' ?
									(
										<Body1
											style={
												StyleSheet.flatten([
													{ lineHeight: '1.5' as any },
													descriptionStyle,
												])
											}
											ellipsizeMode={titleEllipsizeMode}
											numberOfLines={titleNumberOfLines}
										>
											{title}
										</Body1>
									)
									: title
							}
						</View>
					}
					secondary={
						<View>
							{
								typeof description === 'string' ?
									(
										<Body2
											style={
												StyleSheet.flatten([
													{ lineHeight: '1.43' as any, color: theme.palette.text.secondary },
													descriptionStyle,
												])
											}
											ellipsizeMode={descriptionEllipsizeMode}
											numberOfLines={descriptionNumberOfLines}
										>
											{description}
										</Body2>
									)
									: description
							}
						</View>
					}
					disableTypography
				/>
			) : null}
			{right}
		</MUIListItem>
	);
};

import { IconButton, SearchbarProps, View } from '@bluebase/components';
import { Theme, useStyles, useTheme } from '@bluebase/core';
import React from 'react';
import { TextInput, ViewStyle } from 'react-native';

interface SearchbarStyles {
	root: ViewStyle;
	input: ViewStyle;
	iconWrapper: ViewStyle;
	searchIcon: ViewStyle;
	clearIcon: ViewStyle;
}

const defaultStyles = (theme: Theme): SearchbarStyles => ({
	root: {
		backgroundColor: theme.palette.background.card,
		borderRadius: theme.shape.borderRadius,
		flexDirection: 'row',
		...theme.elevation(4),
	},

	input: {
		flex: 1,
		outlineWidth: 0,
		paddingLeft: theme.spacing.unit * 2,
	} as any,

	iconWrapper: {
		alignItems: 'center',
		flexDirection: 'row',
		paddingHorizontal: theme.spacing.unit,
		paddingVertical: theme.spacing.unit / 2,
	},

	searchIcon: {
		padding: theme.spacing.unit / 2,
		width: 31,
	},

	clearIcon: {
		padding: theme.spacing.unit / 2,
		width: 31,
	},
});

export const Searchbar = (props: SearchbarProps) => {
	const { theme } = useTheme();
	const {
		clearAccessibilityLabel,
		clearIcon,
		icon,
		iconColor = theme.palette.text.secondary,
		inputStyle,
		onIconPress,
		searchAccessibilityLabel,
		style,
		value,
		onChangeText,
		...rest
	} = props;
	const styles = useStyles('Searchbar', props, defaultStyles);

	function handleClearPress() {
		if (onChangeText) {
			onChangeText('');
		}
	}

	return (
		<View style={[styles.root, style]} testID="searchbar-root">
			<TextInput
				style={[styles.input, inputStyle]}
				returnKeyType="search"
				// keyboardAppearance={dark ? 'dark' : 'light'}
				accessibilityTraits="search"
				accessibilityRole="search"
				value={value}
				{...rest}
			/>
			<View style={styles.iconWrapper}>
				{value && (
					<IconButton
						accessibilityLabel={clearAccessibilityLabel}
						color={iconColor}
						onPress={handleClearPress}
						name="close"
						size={20}
						style={styles.clearIcon}
						{...clearIcon}
					/>
				)}
				<IconButton
					onPress={onIconPress!}
					color={iconColor}
					name="magnify"
					size={20}
					style={styles.searchIcon}
					// accessibilityLabel={searchAccessibilityLabel}
					{...icon}
				/>
			</View>
		</View>
	);
};

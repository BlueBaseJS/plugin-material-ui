import {
	ActivityIndicator,
	ButtonDefaultProps,
	ButtonProps,
	DynamicIcon
} from '@bluebase/components';
import { getButtonColors, useStyles } from './styles';

import MUIButton from '@material-ui/core/Button';
import React from 'react';
import { StyleSheet } from 'react-native';
import { useTheme as useMuiTheme } from '@material-ui/core/styles';
import { useTheme } from '@bluebase/core';

export const Button = (props: ButtonProps) => {

	const { title, children, loading, icon, disabled, fullWidth, onPress,size,variant} = props;

	const { theme } = useTheme();
	const muiTheme = useMuiTheme();

	const classes = useStyles({ ...props, theme, muiTheme });

	const style = StyleSheet.flatten(props.style);
	const content = children ? children : title;

	const colors = getButtonColors(props, muiTheme, theme);

	let _icon;

	if (loading) {
		_icon = (
			<ActivityIndicator
				color={colors.text}
				style={{
					height: theme.spacing.unit * 3,
					marginRight: theme.spacing.unit,
					width: theme.spacing.unit * 3,
				}}
			/>
		);
	} else if (icon) {
		const iconSize = icon.size || 24;

		const iconProps = {
			color: colors.text,
			size: iconSize,
			style: {
				lineHeight: iconSize,
				marginRight: theme.spacing.unit,
				...icon.style,
			},
			...icon,
		};
		_icon = <DynamicIcon {...iconProps} />;
	}

	return (
		<MUIButton
			classes={classes}
			disabled={disabled}
			fullWidth={fullWidth}
			onClick={onPress}
			size={size}
			style={style}
			variant={variant}
		>
			{_icon}
			{content}
		</MUIButton>
	);
};

Button.defaultProps = ButtonDefaultProps;
Button.displayName = 'Button';

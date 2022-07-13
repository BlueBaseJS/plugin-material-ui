import { Icon, IconButtonDefaultProps, IconButtonProps } from '@bluebase/components';

import MUIIconButton from '@material-ui/core/IconButton';
import React from 'react';
import { StyleSheet } from 'react-native';
import { useTheme } from '@bluebase/core';


export const IconButton = (props: IconButtonProps) => {
	const {disabled, name, size, color, style, onPress} = props;
	const { theme } = useTheme();

	return (
		<MUIIconButton disabled={disabled} onClick={onPress}>
			<Icon
				name={name}
				size={size}
				color={color ?? theme.palette.text.secondary}
				style={StyleSheet.flatten(style)}
			/>
		</MUIIconButton>
	);
};

IconButton.defaultProps = IconButtonDefaultProps;

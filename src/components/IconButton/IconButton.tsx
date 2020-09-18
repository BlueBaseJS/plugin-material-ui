import { Icon, IconButtonDefaultProps, IconButtonProps } from '@bluebase/components';

import MUIIconButton from '@material-ui/core/IconButton';
import React from 'react';
import { StyleSheet } from 'react-native';
import { componentMapper } from '@bluebase/component-mapper';

export const IconButton = componentMapper<IconButtonProps>(MUIIconButton, {
	children: ({ name, size, color }) => <Icon name={name} size={size} color={color} />,

	accessibilityLabel: 'accessibilityLabel',
	disabled: 'disabled',
	fullWidth: 'fullWidth',
	name: 'name',
	onClick: 'onPress',
	// size: 'size', // Disabled due to format mismatch
	style: ({ style }: IconButtonProps) => StyleSheet.flatten(style),
	variant: 'variant',
});

IconButton.defaultProps = IconButtonDefaultProps;

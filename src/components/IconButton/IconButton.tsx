import { Icon, IconButtonDefaultProps, IconButtonProps } from '@bluebase/components';

import MUIIconButton from '@material-ui/core/IconButton';
import React from 'react';
import { componentMapper } from '@bluebase/component-mapper';

export const IconButton = componentMapper<IconButtonProps>(MUIIconButton, {
	children: ({ name, size, color }) => <Icon name={name} size={size} color={color} />,

	accessibilityLabel: 'accessibilityLabel',
	disabled: 'disbaled',
	fullWidth: 'fullWidth',
	name: 'name',
	onClick: 'onPress',
	size: 'size',
	variant: 'variant',
});

IconButton.defaultProps = IconButtonDefaultProps;

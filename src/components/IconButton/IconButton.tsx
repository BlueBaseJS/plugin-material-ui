import { Icon, IconButtonDefaultProps, IconButtonProps } from '@bluebase/components';
import MUIIconButton from '@material-ui/core/IconButton';
import React from 'react';
import { componentMapper } from '@bluebase/component-mapper';

export const IconButton = componentMapper<IconButtonProps>(MUIIconButton, {
	accessibilityLabel: ({ accessibilityLabel }: IconButtonProps) => accessibilityLabel,
	children: ({ name, size, color }) => <Icon name={name} size={size} color={color} />,
	disabled: ({ disabled }: IconButtonProps) => disabled,
	onClick: 'onPress',
}, { rest: true, ignore: ['color'] });

IconButton.defaultProps = IconButtonDefaultProps;
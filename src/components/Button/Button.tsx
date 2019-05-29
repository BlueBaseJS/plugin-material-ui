import {
	ActivityIndicator,
	ButtonDefaultProps,
	ButtonProps,
	DynamicIcon,
} from '@bluebase/components';
import { Theme, ThemeConsumer } from '@bluebase/core';

import MUIButton from '@material-ui/core/Button';
import React from 'react';
import { componentMapper } from '@bluebase/component-mapper';
import { styles } from './styles';
import { withPropsStyles } from '../../withPropsStyles';

const loaderColor = (theme: Theme, buttonProps: ButtonProps) => {
	const { color, disabled, variant } = buttonProps;
	if (variant === 'contained' && !disabled) {
		return '#fff';
	}
	if (disabled) {
		return '#9e9e9e';
	}
	if (
		(color === 'primary' ||
			color === 'secondary' ||
			color === 'success' ||
			color === 'error' ||
			color === 'warning') &&
		!disabled
	) {
		return (theme.palette as any)[color].main;
	} else {
		return color;
	}
};

export const Button = withPropsStyles(styles)(
	componentMapper<ButtonProps>(
		MUIButton,
		{
			children: (buttonProps: ButtonProps) => {
				const { title, children, loading, icon } = buttonProps;
				const content = children ? children : title;

				let _icon;

				if (loading) {
					_icon = (
						<ThemeConsumer>
							{({ theme }: { theme: Theme }) => (
								<ActivityIndicator
									color={loaderColor(theme, buttonProps)}
									style={{ marginRight: 8, width: 24, height: 24 }}
								/>
							)}
						</ThemeConsumer>
					);
				} else if (icon) {
					const size = icon.size || 24;

					const iconProps = {
						size,
						style: {
							lineHeight: size,
							marginRight: 8,
							...icon.style,
						},
						...icon,
					};
					_icon = <DynamicIcon {...iconProps} />;
				}

				return (
					<React.Fragment>
						{_icon}
						{content}
					</React.Fragment>
				);
			},
			onClick: 'onPress',
		},
		{ rest: true, ignore: ['loading', 'color'] }
	)
) as React.ComponentType<ButtonProps>;

Button.defaultProps = ButtonDefaultProps;

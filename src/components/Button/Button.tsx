import {
	ActivityIndicator,
	ButtonDefaultProps,
	ButtonProps,
	DynamicIcon,
} from '@bluebase/components';
import { getButtonColors, styles } from './styles';

import MUIButton from '@material-ui/core/Button';
import React from 'react';
import { StyleSheet } from 'react-native';
import { componentMapper } from '@bluebase/component-mapper';
import { withPropsStyles } from '../../withPropsStyles';
import { withTheme } from '@material-ui/core/styles';

export const Button = withPropsStyles(styles)(
	withTheme()(
		componentMapper<ButtonProps>(MUIButton, {
			children: (props: ButtonProps) => {
				const { title, children, loading, icon, bluebaseTheme } = props;
				const content = children ? children : title;

				const colors = getButtonColors(props, props.theme, props.bluebaseTheme);

				let _icon;

				if (loading) {
					_icon = (
						<ActivityIndicator
							color={colors.text}
							style={{
								height: bluebaseTheme.spacing.unit * 3,
								marginRight: bluebaseTheme.spacing.unit,
								width: bluebaseTheme.spacing.unit * 3,
							}}
						/>
					);
				} else if (icon) {
					const size = icon.size || 24;

					const iconProps = {
						color: colors.text,
						size,
						style: {
							lineHeight: size,
							marginRight: bluebaseTheme.spacing.unit,
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

			classes: 'classes',
			disabled: 'disabled',
			fullWidth: 'fullWidth',
			onClick: 'onPress',
			size: 'size',
			style: ({ style }: any) => StyleSheet.flatten(style),
			variant: 'variant',
		})
	)
) as React.ComponentType<ButtonProps>;

Button.defaultProps = ButtonDefaultProps;

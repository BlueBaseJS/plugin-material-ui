import {
	ActivityIndicator,
	ButtonDefaultProps,
	ButtonProps,
	DynamicIcon,
} from '@bluebase/components';

import MUIButton from '@material-ui/core/Button';
import React from 'react';
import { componentMapper } from '@bluebase/component-mapper';
import { styles } from './styles';
import { withPropsStyles } from '../../withPropsStyles';

export const Button = withPropsStyles(styles)(
	componentMapper<ButtonProps>(MUIButton, {
		children: ({ title, children, loading, icon }: ButtonProps) => {
			const content = children ? children : title;

			let _icon;

			if (loading) {
				_icon = (
					<ActivityIndicator color="#fff" style={{ marginRight: 8, width: 24, height: 24 }} />
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

		disabled: 'disbaled',
		fullWidth: 'fullWidth',
		onClick: 'onPress',
		size: 'size',
		variant: 'variant',
	})
) as React.ComponentType<ButtonProps>;

Button.defaultProps = ButtonDefaultProps;

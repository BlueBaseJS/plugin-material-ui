import { ButtonDefaultProps, ButtonProps, ActivityIndicator, DynamicIcon } from '@bluebase/components';
import MUIButton from '@material-ui/core/Button';
import { componentMapper } from '@bluebase/component-mapper';
import React from 'react';
import { withPropsStyles } from '../../withPropsStyles';
import { styles } from './styles';

export const Button = withPropsStyles(styles)(componentMapper<ButtonProps>(MUIButton, {
	children: ({ title, children, loading, icon }: ButtonProps) => {

		const content = children ? children : title;

		let _icon;

		if (loading) {
			_icon = <ActivityIndicator color="#fff" style={{ marginRight: 8, width: 24, height: 24 }} />;
		}
		else if (icon) {
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
}, { rest: true, })) as React.ComponentType<ButtonProps>;

Button.defaultProps = ButtonDefaultProps;
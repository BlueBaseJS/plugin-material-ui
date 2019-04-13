import { ButtonDefaultProps, ButtonProps } from '@bluebase/components';
import MUIButton from '@material-ui/core/Button';
import { componentMapper } from '@bluebase/component-mapper';

export const Button = componentMapper<ButtonProps>(MUIButton, {
	children: ({ title, children }: ButtonProps) => children ? children : title,
	onClick: 'onPress',
}, { rest: true, });

Button.defaultProps = ButtonDefaultProps;
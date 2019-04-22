
import { ButtonDefaultProps, ButtonProps } from '@bluebase/components';
import CircularProgress from '@material-ui/core/CircularProgress';
import MUIButton from '@material-ui/core/Button';
import React from 'react';
import { componentMapper } from '@bluebase/component-mapper';


export const Button = componentMapper<ButtonProps>(MUIButton, {
	children: ({ children, title }) => children ? children : title ? title
		:
		<CircularProgress />,
	onClick: 'onPress',

}, { rest: true, });

Button.defaultProps = ButtonDefaultProps;



import {
	ButtonDefaultProps,
	ButtonProps
} from '@bluebase/components';
import MUIButton from '@material-ui/core/Button';
import React from 'react';
import { Theme } from '@bluebase/core';
import { objectMapper } from '@bluebase/component-mapper';
import { withPropsStyles } from '../../withPropsStyles';

const styles = ({ color }: any, theme: Theme) => {

	switch (color) {
		case 'primary':
			return {};
		case 'secondary':
			return {};
		case 'success':
			return ({
				contained: {
					backgroundColor: theme.palette.success.main,
					color: theme.palette.success.contrastText,
					// tslint:disable-next-line: object-literal-sort-keys
					'&:hover': {
						backgroundColor: theme.palette.success.dark,
						color: theme.palette.success.contrastText,
					},
				},
				outlined: {
					borderColor: theme.palette.success.main,
					color: theme.palette.success.main,
					// tslint:disable-next-line: object-literal-sort-keys
					'&:hover': {
						backgroundColor: theme.palette.success.contrastText,
					},
				},
				root: {
					color: theme.palette.success.main,
				},
			});
		case 'error':

			return ({
				contained: {
					backgroundColor: theme.palette.error.main,
					color: theme.palette.error.contrastText,
					// tslint:disable-next-line: object-literal-sort-keys
					'&:hover': {
						backgroundColor: theme.palette.error.dark,
						color: theme.palette.error.contrastText,
					},
				},
				outlined: {
					borderColor: theme.palette.error.main,
					color: theme.palette.error.main,
					// tslint:disable-next-line: object-literal-sort-keys
					'&:hover': {
						backgroundColor: theme.palette.error.contrastText,
					},
				},
				root: {
					color: theme.palette.error.main,
				}
			});
		case 'warning':
			return ({
				contained: {
					backgroundColor: theme.palette.warning.main,
					color: theme.palette.warning.contrastText,
					// tslint:disable-next-line: object-literal-sort-keys
					'&:hover': {
						backgroundColor: theme.palette.warning.dark,
						color: theme.palette.warning.contrastText,
					},
				},
				outlined: {
					borderColor: theme.palette.warning.main,
					color: theme.palette.warning.main,
					// tslint:disable-next-line: object-literal-sort-keys
					'&:hover': {
						backgroundColor: theme.palette.background.default,
					},
				},
				root: {
					color: theme.palette.warning.main,
				}
			});
		default:
			return null;
	}


};
const map = {
	// If color is primary, secondary or default set as is
	color: ({ color }: ButtonProps) => {
		if (color === 'primary' || color === 'secondary' || color === 'default') {
			return color;
		}

		return;
	},

	onChange: ({ onChange, onValueChange }: any) => (event: any, checked: boolean) => {
		if (onChange) {
			onChange(event, checked);
		}

		if (onValueChange) {
			onValueChange(event.target.value, checked);
		}
	}

};

export const Button = withPropsStyles(styles)((props: any) => {

	const newProps = objectMapper(props, map, { rest: true, ignore: ['onValueChange'] });

	const { loading, color, children, title, classes, indeterminate, ...common } = newProps;

	if (Object.keys(classes).length > 0) {
		delete common.color;
	}


	return (
		<MUIButton style={classes} {...props}>

			{props.children ? props.children : props.title}
		</MUIButton>
	);
}) as React.ComponentType<ButtonProps>;

Button.defaultProps = ButtonDefaultProps;
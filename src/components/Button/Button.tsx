import {
	// ButtonDefaultProps,
	ButtonProps
} from '@bluebase/components';
import MUIButton from '@material-ui/core/Button';
import React from 'react';
import { objectMapper } from '@bluebase/component-mapper';
import { withPropsStyles } from '../../withPropsStyles';






const styles = ({ color }: any, theme: any) => {

	switch (color) {
		case 'primary':
			return {};
		case 'secondary':
			return {};
		case 'success':
			return ({
				root: {
					backgroundColor: theme.palette.success.main,
					color: theme.palette.success.contrastText,
					// tslint:disable-next-line: object-literal-sort-keys
					'&$hover': {
						color: theme.palette.success.contrastText,
					},

				}
			});
		case 'error':

			return ({
				root: {
					backgroundColor: theme.palette.error.main,
					color: theme.palette.success.contrastText,
					// tslint:disable-next-line: object-literal-sort-keys
					'&$hover': {
						color: theme.palette.error.contrastText,
					},
					'&$disabled': {
						color: theme.palette.action.disabled,
					},
				}
			});
		case 'warning':
			return ({
				root: {
					backgroundColor: theme.palette.warning.main,
					color: theme.palette.success.contrastText,
					// tslint:disable-next-line: object-literal-sort-keys
					'&$hover': {
						color: theme.palette.warning.contrastText,

					},
					'&$disabled': {
						color: theme.palette.action.disabled,
					},
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
}) as any;

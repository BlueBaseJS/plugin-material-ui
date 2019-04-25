import {
	// ButtonDefaultProps,
	ButtonProps
} from '@bluebase/components';
import MUIButton from '@material-ui/core/Button';
import { withPropsStyles } from '../../withPropsStyles';
import React from "react"


import { objectMapper } from '@bluebase/component-mapper';




const styles = ({ color  }: any, theme: any) => {

	console.log("theme",theme);
	switch (color) {
		case 'primary':
		return{};
		case 'secondary':
		return{};
		case 'success':
		return({
			root: {
				// color,
				color:theme.palette.success.contrastText,
				backgroundColor:theme.palette.success.main,
				// tslint:disable-next-line: object-literal-sort-keys
				'&$hover': {
					color:theme.palette.success.contrastText,
				},
				
			}});
		case 'error':
	
		return({
			root: {
				// color,
				color:theme.palette.success.contrastText,
				backgroundColor:theme.palette.error.main,
				// tslint:disable-next-line: object-literal-sort-keys
				'&$hover': {
					color:theme.palette.error.contrastText,
				},
				'&$disabled': {
					color: theme.palette.action.disabled,
				},
			}});
		case 'warning':
		return({
			root: {
				color:theme.palette.success.contrastText,
				backgroundColor:theme.palette.warning.main,
				// tslint:disable-next-line: object-literal-sort-keys
				'&$hover': {
					color:theme.palette.warning.contrastText,
					
				},
				'&$disabled': {
					color: theme.palette.action.disabled,
				},
			}});			
			//break;
	
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

	const { loading, color,children, title, classes, indeterminate, ...common } = newProps;

	if (Object.keys(classes).length > 0) {
		delete common.color;
	}


	return (
		<MUIButton style={classes} {...props}>

		{props.children?props.children:props.title}
	</MUIButton>
	);
}) as any;

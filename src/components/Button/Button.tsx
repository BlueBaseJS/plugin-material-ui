
import { ButtonDefaultProps, ButtonProps } from '@bluebase/components';
import CircularProgress from '@material-ui/core/CircularProgress';
import MUIButton from '@material-ui/core/Button';
import React from 'react';

export const Button = (props: ButtonProps) => {

	if (props.title && props.loading === false) {
		return (
			<MUIButton {...props}>
				{props.title}
			</MUIButton>
		);
	}

	if (props.children && props.loading === false) {
		return (
			<MUIButton {...props}>
				{props.children}
			</MUIButton>
		);
	}

	if (props.children && props.loading === true) {
		return (
			<MUIButton {...props}>
				<CircularProgress />
				{props.children}
			</MUIButton>);
	}

	if (props.title && props.loading === true) {
		return (
			<MUIButton {...props}>
				<CircularProgress />
				{props.title}
			</MUIButton>
		);
	}


	return null;
};
Button.defaultProps = ButtonDefaultProps;



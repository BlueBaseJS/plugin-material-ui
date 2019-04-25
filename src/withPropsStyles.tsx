import { ThemeConsumer, ThemeContextData, } from '@bluebase/core';
import React from 'react';
import { withStyles } from '@material-ui/core/styles';

const { createElement, forwardRef } = React;

// Docs: https://github.com/mui-org/material-ui/issues/7633#issuecomment-418211698
export const withPropsStyles = (style: any) => {

	const withPropsStylesInternal = (component: React.ComponentType<any>) => {
		return forwardRef((props, ref) => (
			<ThemeConsumer>
				{({ theme }: ThemeContextData) => {
					const proxy = () => style(props, theme);
					const hoc = withStyles(proxy)(component);
					return createElement(hoc, { ...props, ref }, props.children);
				}}
			</ThemeConsumer>
		));
	};
	return withPropsStylesInternal;
};







// import {Theme, withStyles } from '@material-ui/core/styles';
// import { ThemeConsumer, ThemeContextData } from '@bluebase/core';
// import React from 'react';

// const { createElement, forwardRef } = React;

// // Docs: https://github.com/mui-org/material-ui/issues/7633#issuecomment-418211698
// export const withPropsStyles = (style: any) => {




// 	const withPropsStylesInternal = (component: React.ComponentType<any>) => {


// 		return (
// 			<ThemeConsumer>
// 				{({ theme }: ThemeContextData) => {

// 					return (
// 						forwardRef((props, ref) => {
// 							const proxy = (Theme:any) => style(props, Theme);
// 							const hoc = withStyles(proxy)(component);
// 							return createElement(hoc, { ...props, ref }, props.children);
// 						}
// 						)
// 					);
// 				}}
// 			</ThemeConsumer>
// 		);

// 	};

// 	return withPropsStylesInternal;
// };

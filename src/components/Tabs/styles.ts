import { NavigationOptions } from '@bluebase/components';
import { Theme } from '@bluebase/core';


export const styles = (options: NavigationOptions, _theme: Theme) => {
	return {
		root: {
			...options,
			color: 'green',
			// '&:hover': {
			// 	color: '#40a9ff',
			// 	opacity: 1,
			// },
			// '&:focus': {
			// 	color: '#40a9ff',
			// },
		},
	};
};
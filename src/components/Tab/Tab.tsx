// import MuiTab from '@material-ui/core/Tab';
// import React from 'react';
// import { Theme } from '@bluebase/core';
// import { withPropsStyles } from '../../withPropsStyles';

// export const styles: any = ({  }: any, _muiTheme: any, _theme: Theme) => {
// 	return {
// 		// root: {
// 		// 	backgroundColor: theme.palette.background.default,
// 		// 	flexGrow: 1,
// 		// },
// 		// tabsRoot: {
// 		// 	borderBottom: '1px solid green',
// 		// },
// 		// tabsIndicator: {
// 		// 	backgroundColor: '#1890ff',
// 		// },
// 		tabRoot: {
// 			textTransform: 'initial',
// 			minWidth: 72,
// 			// marginRight: theme.spacing.unit * 4,
// 			fontFamily: [
// 				'-apple-system',
// 				'BlinkMacSystemFont',
// 				'"Segoe UI"',
// 				'Roboto',
// 				'"Helvetica Neue"',
// 				'Arial',
// 				'sans-serif',
// 				'"Apple Color Emoji"',
// 				'"Segoe UI Emoji"',
// 				'"Segoe UI Symbol"',
// 			].join(','),
// 			'&:hover': {
// 				color: 'green',
// 				opacity: 1,
// 			},
// 			'&$tabSelected': {
// 				color: 'yellow',
// 			},
// 			'&:focus': {
// 				color: 'red',
// 			},
// 		},
// 		tabSelected: {},
// 		// typography: {
// 		// 	padding: theme.spacing.unit * 3,
// 		// },
// 	};
// };

// export const CustomTabs = (props: any) => {
// 	const { label } = props;
// 	// const style: any = props.styles;
// 	return (
// 		<MuiTab
// 			classes={{ root: styles.tabRoot, selected: styles.tabSelected }}
// 			label={label}
// 			{...props}
// 		/>
// 	);
// };

// export const Tab = withPropsStyles(styles)(CustomTabs);

import MuiTab from '@material-ui/core/Tab';
import React from 'react';
// import Tab from '@material-ui/core/Tab';
import { withStyles } from '@material-ui/core/styles';
// export const Tabs = withStyles(styles)(CustomizedTabs);

function getTabUI(props: any) {
	const { classes } = props;
	return <MuiTab classes={{ root: classes.tabRoot, selected: classes.tabSelected }} {...props} />;
}

export const Tab = (props: any) => {
	const styles: any = (_theme: any) => {
		return {
			tabRoot: {
				borderBottom: '1px solid blue',
			},
			tabSelected: {},
			...props.styles,
		};
	};

	const Wrapper: any = getTabUI;
	const Styled = withStyles(styles)(Wrapper);
	return <Styled>{props.children}</Styled>;
};

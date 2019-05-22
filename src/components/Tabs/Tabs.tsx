import MuiTabs from '@material-ui/core/Tabs';
import React from 'react';
// import Tab from '@material-ui/core/Tab';
import { withStyles } from '@material-ui/core/styles';
// export const Tabs = withStyles(styles)(CustomizedTabs);

function getTabsUI(props: any) {
	const { classes, children } = props;
	return (
		<MuiTabs classes={{ root: classes.tabsRoot, indicator: classes.tabsIndicator }} {...props}>
			{children}
		</MuiTabs>
	);
}

export const Tabs = (props: any) => {
	const styles: any = (_theme: any) => {
		return {
			tabsIndicator: {
				backgroundColor: 'blue',
			},
			tabsRoot: {
				borderBottom: '1px solid blue',
			},
			...props.styles,
		};
	};

	const Wrapper: any = getTabsUI;
	const Styled = withStyles(styles)(Wrapper);
	return <Styled>{props.children}</Styled>;
};

// import MuiTabs from '@material-ui/core/Tabs';
// import React from 'react';
// import { withPropsStyles } from './../../withPropsStyles';

// const defaultStyles: any = (_theme: any) => ({
// 	root: {
// 		flexGrow: 1,
// 		backgroundColor: 'red',
// 	},
// 	tabsRoot: {
// 		borderBottom: '1px solid #e8e8e8',
// 	},
// 	tabsIndicator: {
// 		backgroundColor: 'green',
// 	},
// 	tabRoot: {
// 		textTransform: 'initial',
// 		minWidth: 72,
// 		// fontWeight: theme.typography.fontWeightRegular,
// 		// marginRight: theme.spacing.unit * 4,
// 		fontFamily: [
// 			'-apple-system',
// 			'BlinkMacSystemFont',
// 			'"Segoe UI"',
// 			'Roboto',
// 			'"Helvetica Neue"',
// 			'Arial',
// 			'sans-serif',
// 			'"Apple Color Emoji"',
// 			'"Segoe UI Emoji"',
// 			'"Segoe UI Symbol"',
// 		].join(','),
// 		'&:hover': {
// 			color: 'green',
// 			opacity: 1,
// 		},
// 		'&$tabSelected': {
// 			color: '#1890ff',
// 			// fontWeight: theme.typography.fontWeightMedium,
// 		},
// 		'&:focus': {
// 			color: '#40a9ff',
// 		},
// 	},
// 	tabSelected: {},
// 	typography: {
// 		// padding: theme.spacing.unit * 3,
// 	},
// });

// const CustomizedTabs = (props: any) => {
// 	const { value, children } = props;

// 	return (
// 		<MuiTabs
// 			value={value}
// 			classes={{ root: defaultStyles.tabsRoot, indicator: defaultStyles.tabsIndicator }}
// 		>
// 			{children}
// 		</MuiTabs>
// 	);
// };

// export const Tabs = withPropsStyles(defaultStyles)(CustomizedTabs);

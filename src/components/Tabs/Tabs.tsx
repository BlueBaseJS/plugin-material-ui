import MuiTabs from '@material-ui/core/Tabs';
import React from 'react';
import { withStyles } from '@material-ui/core/styles';
function getTabsUI(props: any) {
	const { children, ...other } = props;
	return <MuiTabs {...other}>{children}</MuiTabs>;
}

export const Tabs = (props: any) => {
	const Wrapper: any = getTabsUI;
	const Styled = withStyles(props.styles)(Wrapper);
	return <Styled {...props} />;
};

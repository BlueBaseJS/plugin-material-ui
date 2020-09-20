import MuiTabs from '@material-ui/core/Tabs';
import React from 'react';
import { withStyles } from '@material-ui/core/styles';

(MuiTabs as any).displayName = 'Tabs';

function getTabsUI(props: any) {
	const { children, ...other } = props;
	return (
		<MuiTabs variant="scrollable" {...other}>
			{children}
		</MuiTabs>
	);
}

export const Tabs = (props: any) => {
	const Wrapper: any = getTabsUI;
	const Styled = withStyles(props.styles || {})(Wrapper);
	return <Styled {...props} />;
};

import { Icon } from '@bluebase/components';
import MuiTab from '@material-ui/core/Tab';
import React from 'react';
import { withStyles } from '@material-ui/core/styles';

function getTabUI(props: any) {
	return <MuiTab {...props} />;
}

export const Tab = (props: any) => {
	const { icon, ...rest } = props;
	const Wrapper: any = getTabUI;
	const Styled = withStyles(props.styles)(Wrapper);
	return <Styled {...rest} icon={icon ? <Icon name={icon} /> : undefined} />;
};

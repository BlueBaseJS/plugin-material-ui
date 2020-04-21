import { DynamicIcon } from '@bluebase/components';
import MuiTab from '@material-ui/core/Tab';
import React from 'react';
import { withStyles } from '@material-ui/core/styles';

(MuiTab as any).displayName = 'Tab';

function getTabUI(props: any) {
	return <MuiTab {...props} />;
}

export const Tab = (props: any) => {
	const { icon, ...rest } = props;
	const Wrapper: any = getTabUI;
	const Styled = withStyles(props.styles || {})(Wrapper);

	let iconNode;

	if (React.isValidElement(icon)) {
		iconNode = icon;
	} else if (!!icon) {
		iconNode = (
			<DynamicIcon
				size={icon.size || 24}
				style={{ lineHeight: icon.size || 24, ...icon.style }}
				{...icon}
			/>
		);
	}

	return <Styled {...rest} icon={iconNode} />;
};

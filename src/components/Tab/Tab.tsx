import { DynamicIcon } from '@bluebase/components';
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

	// const CustomIcon: React.ElementType = () => {
	// 	if (!icon) {
	// 		return null;
	// 	}
	// 	const size = icon.size || 24;

	// 	const iconProps = {
	// 		size,
	// 		style: {
	// 			lineHeight: size,
	// 			...icon.style,
	// 		},
	// 		...icon,
	// 	};

	// 	return <DynamicIcon {...iconProps} />;
	// };
	return (
		<Styled
			{...rest}
			icon={
				// <CustomIcon />
				icon ? (
					<DynamicIcon
						size={icon.size || 24}
						style={{ lineHeight: icon.size || 24, ...icon.style }}
						{...icon}
					/>
				) : (
					undefined
				)
			}
		/>
	);
};

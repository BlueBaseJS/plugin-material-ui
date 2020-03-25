import React, { useRef } from 'react';
import { View, findNodeHandle } from 'react-native';

import { MenuProps } from '@bluebase/components';
import MuiMenu from '@material-ui/core/Menu';

export const Menu = (props: MenuProps) => {
	const { children, anchor, onDismiss, visible, style, anchorWrapperStyle, ...rest } = props;

	const el = useRef(null);

	return (
		<React.Fragment>
			<View ref={el} style={anchorWrapperStyle}>
				{anchor}
			</View>
			<MuiMenu
				anchorEl={findNodeHandle(el.current)}
				keepMounted
				open={!!visible}
				onClose={onDismiss}
				style={style as any}
				{...rest}
			>
				{children}
			</MuiMenu>
		</React.Fragment>
	);
};

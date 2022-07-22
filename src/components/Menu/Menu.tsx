import { MenuProps } from '@bluebase/components';
import MuiMenu from '@material-ui/core/Menu';
import React, { useEffect, useRef } from 'react';
import { StyleSheet, View } from 'react-native';

export const Menu = (props: MenuProps) => {
	const { children, anchor, onDismiss, visible, style, anchorWrapperStyle, ...rest } = props;
	const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);

	const el = useRef<any>();

	useEffect(() => {
		if (el.current) {
			setAnchorEl(el.current);
		}
	}, [el]);

	return (
		<React.Fragment>
			<View ref={el} style={anchorWrapperStyle}>
				{anchor}
			</View>
			<MuiMenu
				anchorEl={anchorEl}
				keepMounted
				open={!!visible}
				onClose={onDismiss}
				style={StyleSheet.flatten(style) as any}
				{...rest}
			>
				{/* div added because: https://github.com/mui/material-ui/issues/15903 */}
				<div>
					{children}
				</div>
			</MuiMenu>
		</React.Fragment>
	);
};

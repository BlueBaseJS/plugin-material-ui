import { DialogDefaultProps, DialogProps } from '@bluebase/components';
import MuiDialog from '@material-ui/core/Dialog';
import React, { useCallback } from 'react';
import { StyleSheet } from 'react-native';

export const Dialog = (props: DialogProps) => {
	const { children, visible, dismissable, onDismiss, style } = props;

	const onClose = useCallback((_event: any, reason: string) => {
		if (!dismissable && reason === 'backdropClick') {
			return;
		}

		if (onDismiss) {
			onDismiss();
		}
	}, [dismissable, onDismiss]);

	return (
		<MuiDialog
			open={visible}
			onClose={onClose}
			style={StyleSheet.flatten(style) as any}
		>
			{children}
		</MuiDialog>
	);
};
Dialog.defaultProps = { fullWidth: true, ...DialogDefaultProps } as any;

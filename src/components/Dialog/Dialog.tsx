import { componentMapper } from '@bluebase/component-mapper';
import { DialogDefaultProps, DialogProps } from '@bluebase/components';
import MuiDialog from '@material-ui/core/Dialog';
import { StyleSheet } from 'react-native';

export const Dialog = componentMapper<DialogProps>(
	MuiDialog,
	{
		children: 'children',
		onClose: ({ dismissable, onDismiss }) => (_event: any, reason: string) => {
			if (!dismissable && reason === 'backdropClick') {
				return;
			}

			if (onDismiss) {
				onDismiss();
			}
		},
		open: 'visible',
		style: ({ style }: any) => StyleSheet.flatten(style),
	},
	{ rest: true, ignore: ['dismissable'] }
);

Dialog.defaultProps = { fullWidth: true, ...DialogDefaultProps } as any;

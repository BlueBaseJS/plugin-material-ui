import { DialogDefaultProps, DialogProps } from '@bluebase/components';

import MuiDialog from '@material-ui/core/Dialog';
import { StyleSheet } from 'react-native';
import { componentMapper } from '@bluebase/component-mapper';

export const Dialog = componentMapper<DialogProps>(MuiDialog, {
	children: 'children',
	onClose: 'onDismiss',
	open: 'visible',
	style: ({ style }: any) => StyleSheet.flatten(style),
});

Dialog.defaultProps = DialogDefaultProps;

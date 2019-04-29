import { DialogDefaultProps, DialogProps } from '@bluebase/components';
import MuiDialog from '@material-ui/core/Dialog';
import { componentMapper } from '@bluebase/component-mapper';

export const Dialog = componentMapper<DialogProps>(MuiDialog, {
	children: ({ children }: DialogProps) => children,
	onClose: 'onDismiss',
	open: 'visible'
}, { rest: true, });

Dialog.defaultProps = DialogDefaultProps;
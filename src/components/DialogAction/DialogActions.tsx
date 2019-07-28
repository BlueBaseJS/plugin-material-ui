import { DialogActionsProps } from '@bluebase/components';
import MUIDialogActions from '@material-ui/core/DialogActions';
import { StyleSheet } from 'react-native';
import { componentMapper } from '@bluebase/component-mapper';

export const DialogActions = componentMapper<DialogActionsProps>(MUIDialogActions, {
	children: 'children',
	style: ({ style }: any) => StyleSheet.flatten(style),
});

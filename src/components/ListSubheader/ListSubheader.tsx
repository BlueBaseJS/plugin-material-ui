import { componentMapper } from '@bluebase/component-mapper';
import { ListSubheaderProps } from '@bluebase/components';
import MuiListSubheader from '@material-ui/core/ListSubheader';
import { StyleSheet } from 'react-native';

export const ListSubheader = componentMapper<ListSubheaderProps>(MuiListSubheader, {
	children: 'children',
	disableSticky: () => true,
	inset: 'inset',
	style: ({ style }: ListSubheaderProps) => StyleSheet.flatten(style),
});

import { componentMapper } from '@bluebase/component-mapper';
import {
	List as BEList,
	ListAvatar,
	ListIcon,
	ListItem,
	ListProps,
	ListSubheader,
} from '@bluebase/components';
import MuiList from '@material-ui/core/List';

export const List = componentMapper<ListProps>(MuiList, {
	children: 'children',
}, { rest: true }) as typeof BEList;

List.Avatar = ListAvatar;
List.Icon = ListIcon;
List.Item = ListItem;
List.Subheader = ListSubheader;


import { BlueBase, BootOptions, createPlugin } from '@bluebase/core';

import { Avatar } from './components/Avatar';
import { Badge } from './components/Badge';
import { BottomNavigation } from './components/BottomNavigation';
import { BottomNavigationAction } from './components/BottomNavigationAction';
import { Button } from './components/Button';
import { Card } from './components/Card';
import { CardActions } from './components/CardActions';
import { CardContent } from './components/CardContent';
import { CardCover } from './components/CardCover';
import { CardHeader } from './components/CardHeader';
import { Checkbox } from './components/Checkbox';
import { Dialog } from './components/Dialog';
import { DialogActions } from './components/DialogAction';
import { DialogContent } from './components/DialogContent';
import { DialogTitle } from './components/DialogTitle';
import { Divider } from './components/Divider';
import { DrawerItem } from './components/DrawerItem';
import { DrawerActions, DrawerLayout } from './components/DrawerLayout';
import { DrawerSection } from './components/DrawerSection';
import { IconButton } from './components/IconButton';
import { List } from './components/List';
import { ListAvatar } from './components/ListAvatar';
import { ListIcon } from './components/ListIcon';
import { ListItem } from './components/ListItem';
import { ListSubheader } from './components/ListSubheader';
import { Menu } from './components/Menu/Menu';
import { MenuItem } from './components/Menu/MenuItem';
import { Pagination } from './components/Pagination';
import { Picker } from './components/Picker';
import { PickerItem } from './components/PickerItem';
import { Radio } from './components/Radio';
import { RadioGroup } from './components/RadioGroup';
import { Searchbar } from './components/Searchbar';
import { Slider } from './components/Slider';
import { Switch } from './components/Switch';
import { Tab } from './components/Tab';
import { Table } from './components/Table';
import { TableBody } from './components/TableBody';
import { TableCell } from './components/TableCell';
import { TableFooter } from './components/TableFooter';
import { TableHead } from './components/TableHead';
import { TablePagination } from './components/TablePagination';
import { TableRow } from './components/TableRow';
import { TableTitle } from './components/TableTitle';
import { Tabs } from './components/Tabs/Tabs';
import { TextInput } from './components/TextInput';
import { TextInputAffix } from './components/TextInputAffix';
import { TextInputIcon } from './components/TextInputIcon';
import WithRTL from './withRtl';
import { withTheme } from './withTheme';

export default createPlugin({
	categories: ['ui'],
	description: 'Material UI (web) comes to BlueBase!',
	key: 'material-ui',
	name: 'Material UI',
	version: '2.0.0',

	components: {
		Avatar,
		Badge,
		BottomNavigation,
		BottomNavigationAction,
		Button,
		Card,
		CardActions,
		CardContent,
		CardCover,
		CardHeader,
		Checkbox,
		Dialog,
		DialogActions,
		DialogContent,
		DialogTitle,
		Divider,
		DrawerActions,
		DrawerItem,
		DrawerLayout,
		DrawerSection,
		IconButton,
		List,
		ListAvatar,
		ListIcon,
		ListItem,
		ListSubheader,
		Menu,
		MenuItem,
		Pagination,
		Picker,
		PickerItem,
		Radio,
		RadioGroup,
		Searchbar,
		Slider,
		Switch,
		Tab,
		Table,
		TableBody,
		TableCell,
		TableFooter,
		TableHead,
		TablePagination,
		TableRow,
		TableTitle,
		Tabs,
		TextInput,
		TextInputAffix,
		TextInputIcon,
	},

	filters: {
		'bluebase.boot.end': (bootOptions: BootOptions, _ctx: any, BB: BlueBase) => {
			BB.Components.addHocs('BlueBaseContent', WithRTL, withTheme);
			return bootOptions;
		},
	},
});

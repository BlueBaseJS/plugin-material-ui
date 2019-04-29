import { BlueBase, BootOptions, createPlugin } from '@bluebase/core';
import { DrawerActions, DrawerLayout } from './components/DrawerLayout';
import { Avatar } from './components/Avatar';
import { Badge } from './components/Badge';
import { Body1 } from './components/Body1';
import { Body2 } from './components/Body2';
import { BottomNavigation } from './components/BottomNavigation';
import { BottomNavigationAction } from './components/BottomNavigationAction';
import { Button } from './components/Button';
import { Caption } from './components/Caption';
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
import { DrawerSection } from './components/DrawerSection';
import { H1 } from './components/H1';
import { H2 } from './components/H2';
import { H3 } from './components/H3';
import { H4 } from './components/H4';
import { H5 } from './components/H5';
import { H6 } from './components/H6';
import { IconButton } from './components/IconButton';
import { List } from './components/List';
import { ListAvatar } from './components/ListAvatar';
import { ListIcon } from './components/ListIcon';
import { ListItem } from './components/ListItem';
import { ListSubheader } from './components/ListSubheader';

import { Menu } from './components/Menu/Menu';
import { MenuItem } from './components/Menu/MenuItem';
import { Overline } from './components/Overline';
import { Picker } from './components/Picker';
import { PickerItem } from './components/PickerItem';
import { Radio } from './components/Radio';
import { RadioGroup } from './components/RadioGroup';
import { Slider } from './components/Slider';
import { Subtitle1 } from './components/Subtitle1';
import { Subtitle2 } from './components/Subtitle2';
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
import { Tabs } from './components/Tabs';
import { TextInput } from './components/TextInput';
import { withTheme } from './withTheme';

export default createPlugin({
	categories: ['ui'],
	description: 'Material UI (web) comes to BlueBase!',
	key: 'material-ui',
	name: 'Material UI',
	version: '0.0.1',

	components: {
		Avatar,
		Badge,
		Body1,
		Body2,
		BottomNavigation,
		BottomNavigationAction,
		Button,
		Caption,
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
		H1,
		H2,
		H3,
		H4,
		H5,
		H6,
		IconButton,
		List,
		ListAvatar,
		ListIcon,
		ListItem,
		ListSubheader,
		Menu,
		MenuItem,
		Overline,
		Picker,
		PickerItem,
		Radio,
		RadioGroup,
		Slider,
		Subtitle1,
		Subtitle2,
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
	},

	filters: {
		'bluebase.boot.end': (bootOptions: BootOptions, _ctx: any, BB: BlueBase) => {
			BB.Components.addHocs('BlueBaseContent', withTheme);
			return bootOptions;
		},
	},
});

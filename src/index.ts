import { BlueBase, BootOptions, createPlugin } from '@bluebase/core';
import { DrawerActions, DrawerLayout } from './components/DrawerLayout';
import { Avatar } from './components/Avatar';
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
import { DrawerSection } from './components/DrawerSection';
import { List } from './components/List';
import { ListAvatar } from './components/ListAvatar';
import { ListIcon } from './components/ListIcon';
import { ListItem } from './components/ListItem';
import { ListSubheader } from './components/ListSubheader';

import { Menu } from './components/Menu/Menu';
import { MenuItem } from './components/Menu/MenuItem';
import { Picker } from './components/Picker';
import { PickerItem } from './components/PickerItem';
import { Radio } from './components/Radio';
import { RadioGroup } from './components/RadioGroup';
import { Slider } from './components/Slider';
import { Switch } from './components/Switch';
import { Tab } from './components/Tab';
import { Tabs } from './components/Tabs';
import { TextInput } from './components/TextInput';
import WithRTL from './withRtl';
import { withTheme } from './withTheme';

export default createPlugin({
	categories: ['ui'],
	description: 'Material UI (web) comes to BlueBase!',
	key: 'material-ui',
	name: 'Material UI',
	version: '0.0.1',

	components: {
		Avatar,
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
		List,
		ListAvatar,
		ListIcon,
		ListItem,
		ListSubheader,
		Menu,
		MenuItem,
		Picker,
		PickerItem,
		Radio,
		RadioGroup,
		Slider,
		Switch,
		Tab,
		Tabs,
		TextInput,
	},

	filters: {
		'bluebase.boot.end': (bootOptions: BootOptions, _ctx: any, BB: BlueBase) => {
			BB.Components.addHocs('BlueBaseContent', withTheme, WithRTL);
			return bootOptions;
		},
	},
});

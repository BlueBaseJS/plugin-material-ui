import { BottomNavigation } from './components/BottomNavigation';
import { BottomNavigationAction } from './components/BottomNavigationAction';
import { Button } from './components/Button';
import { Checkbox } from './components/Checkbox';
import { Divider } from './components/Divider';
import { DrawerItem } from './components/DrawerItem';
import { DrawerSection } from './components/DrawerSection';
import { ListItem } from './components/ListItem';
import { ListSection } from './components/ListSection';
import { ListSubheader } from './components/ListSubheader';
import { Picker } from './components/Picker';
import { PickerItem } from './components/PickerItem';
import { Radio } from './components/Radio';
import { RadioGroup } from './components/RadioGroup';
import { Slider } from './components/Slider';
import { Switch } from './components/Switch';
import { Tab } from './components/Tab';
import { Tabs } from './components/Tabs';
import { TextInput } from './components/TextInput';
import { createPlugin } from '@bluebase/core';

export default createPlugin({
	categories: ['ui'],
	description: 'Material UI (web) comes to BlueBase!',
	key: 'material-ui',
	name: 'Material UI',
	version: '0.0.1',

	components: {
		BottomNavigation,
		BottomNavigationAction,
		Button,
		Checkbox,
		Divider,
		DrawerItem,
		DrawerSection,
		ListItem,
		ListSection,
		ListSubheader,
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
});

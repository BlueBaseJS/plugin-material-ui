import { Button } from './components/Button';
import { Checkbox } from './components/Checkbox';
import { Divider } from './components/Divider';
import { DrawerItem } from './components/DrawerItem';
import { DrawerSection } from './components/DrawerSection';
import { ListItem } from './components/ListItem';
import { ListSection } from './components/ListSection';
import { ListSubheader } from './components/ListSubheader';
import { Radio } from './components/Radio';
import { RadioGroup } from './components/RadioGroup';
import { Slider } from './components/Slider';
import { Switch } from './components/Switch';
import { TextInput } from './components/TextInput';
import { createPlugin } from '@bluebase/core';

export default createPlugin({
	categories: ['ui'],
	description: 'Material UI (web) comes to BlueBase!',
	key: 'material-ui',
	name: 'Material UI',
	version: '0.0.1',

	components: {
		Button,
		Checkbox,
		Divider,
		DrawerItem,
		DrawerSection,
		ListItem,
		ListSection,
		ListSubheader,
		Radio,
		RadioGroup,
		Slider,
		Switch,
		TextInput,
	},
});

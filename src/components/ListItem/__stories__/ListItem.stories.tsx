import {
	ListAvatar,
	ListIcon,
	ListItem,
	Switch,
	View
} from '@bluebase/components';
import storiesOf from '@bluebase/storybook-addon';
import { action } from '@storybook/addon-actions';
import { withKnobs } from '@storybook/addon-knobs';
import React from 'react';

const stories = storiesOf('ListItem', module);

// stories.addDecorator(withInfo);
stories.addDecorator(withKnobs);

stories.add('Default props', () => (
	<ListItem title="Item 1" />
));

stories.add('With Left Icon & Right', () => (
	<ListItem
		title="Item 1"
		description="Jan 9, 2014"
		left={<ListIcon name="inbox" />}
		right={<Switch />}
	/>
));

stories.add('RTL', () => (
	<div dir="rtl">
		<ListItem
			title="Item 1"
			description="Jan 9, 2014"
			left={<ListIcon name="inbox" />}
			right={<Switch />}
		/>
	</div>

));

stories.add('With Left Avatar & Right', () => (
	<ListItem
		title="Item 1"
		left={<ListAvatar type="image" image={{ uri: 'https://randomuser.me/api/portraits/women/44.jpg' }} />}
		right={<Switch />}
	/>
));

stories.add('onPress listener', () => (
	<ListItem title="Click Me" onPress={action('drawer-item-click')} />
));

stories.add('Active', () => (
	<ListItem title="Click Me" selected />
));

stories.add('Disabled', () => (
	<ListItem title="Click Me" onPress={action('drawer-item-click')} disabled />
));

stories.add('Long Content', () => (
	<View style={{ width: 400 }}>
		<ListItem
			descriptionNumberOfLines={3}
			title="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras blandit vel ante vel sollicitudin. Pellentesque tristique magna vel justo molestie pulvinar."
			description="Suspendisse potenti. Suspendisse pellentesque diam ac magna porta scelerisque et ac nunc. Aenean ut vehicula tellus. Phasellus vitae purus magna. Vestibulum sed nibh turpis. Suspendisse quis leo non quam tincidunt laoreet in a enim. Praesent at faucibus felis. Sed posuere lectus massa, ut tincidunt dolor rhoncus vel. In sit amet vehicula dui. Ut a congue justo. Suspendisse sollicitudin euismod enim, eget mattis urna suscipit id. Etiam porta finibus est at convallis. Suspendisse vehicula finibus purus. Curabitur et mi tincidunt, lobortis ante luctus, faucibus ligula. Aenean sed enim accumsan lorem scelerisque dignissim sit amet eu odio."
		/>
	</View>
));

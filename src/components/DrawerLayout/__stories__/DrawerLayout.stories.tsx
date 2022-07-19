import {
	Button,
	DrawerActions,
	DrawerItem,
	DrawerLayout,
	DrawerSection,
	Text,
	View,
} from '@bluebase/components';
import storiesOf from '@bluebase/storybook-addon';
import { withInfo } from '@storybook/addon-info';
import { withKnobs } from '@storybook/addon-knobs';
import React from 'react';

const stories = storiesOf('DrawerLayout', module);

stories.addDecorator(withInfo);
stories.addDecorator(withKnobs);

const DrawerContent = () => (
	<View style={{ flex: 1, alignItems: 'center' }}>
		<Text style={{ margin: 10, fontSize: 15, textAlign: 'right' }}>Hello</Text>
		<Text style={{ margin: 10, fontSize: 15, textAlign: 'right' }}>World!</Text>
		<DrawerActions>
			{navigation => (
				<React.Fragment>
					<Button title="Open" onPress={navigation.openDrawer} />
					<Button title="Close" onPress={navigation.closeDrawer} />
					<Button title="Toggle" onPress={navigation.toggleDrawer} />
				</React.Fragment>
			)}
		</DrawerActions>
	</View>
);

const navigationView = () => (
	<View style={{ flex: 1, backgroundColor: '#fff' }}>
		<DrawerSection title="Menu">
			<DrawerItem title="Home" onPress={console.log} />
			<DrawerItem title="Categories" onPress={console.log} />
			<DrawerItem title="Cart" onPress={console.log} />
		</DrawerSection>
	</View>
);
stories

	.add('Default props', () => (
		<DrawerLayout
			// open
			drawerWidth={200}
			// drawerPosition="left"
			renderNavigationView={navigationView}
		>
			<DrawerContent />
		</DrawerLayout>
	))

	.add('Right Positioned', () => (
		<DrawerLayout
			// open
			drawerWidth={200}
			drawerPosition="right"
			renderNavigationView={navigationView}
		>
			<DrawerContent />
		</DrawerLayout>
	))

	.add('Type: slide', () => (
		<DrawerLayout renderNavigationView={navigationView} drawerType="slide" drawerWidth={200} open>
			<DrawerContent />
		</DrawerLayout>
	))

	.add('Type: slide, Nested', () => (
		<View style={{ flex: 1 }}>
			<View style={{ backgroundColor: 'red', minHeight: 30 }}>
				<Text>Top</Text>
			</View>
			<View style={{ flex: 1, flexDirection: 'row', backgroundColor: 'red' }}>
				<View style={{ width: 150, backgroundColor: 'yellow' }}>
					<Text>Left</Text>
				</View>
				<View style={{ flex: 1, backgroundColor: 'green' }}>
					<DrawerLayout
						renderNavigationView={navigationView}
						drawerType="slide"
						drawerWidth={200}
						open
					>
						<DrawerContent />
					</DrawerLayout>
				</View>
				<View style={{ width: 150, backgroundColor: 'blue' }}>
					<Text>Left</Text>
				</View>
			</View>
		</View>
	))

	.add('Type: front, Nested', () => (
		<View style={{ flex: 1 }}>
			<View style={{ backgroundColor: 'red', minHeight: 30 }}>
				<Text>Top</Text>
			</View>
			<View style={{ flex: 1, flexDirection: 'row', backgroundColor: 'red' }}>
				<View style={{ width: 150, backgroundColor: 'yellow' }}>
					<Text>Left</Text>
				</View>
				<View style={{ flex: 1, backgroundColor: 'green' }}>
					<DrawerLayout renderNavigationView={navigationView} drawerType="front" open>
						<DrawerContent />
					</DrawerLayout>
				</View>
				<View style={{ width: 150, backgroundColor: 'blue' }}>
					<Text>Left</Text>
				</View>
			</View>
		</View>
	));

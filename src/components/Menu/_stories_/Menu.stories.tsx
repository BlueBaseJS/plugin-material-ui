import { ButtonProps, Divider, MenuItemProps, MenuProps } from '@bluebase/components';
import React, { useState } from 'react';

import { View } from 'react-native';
import { getComponent } from '@bluebase/core';
import storiesOf from '@bluebase/storybook-addon';
import { withInfo } from '@storybook/addon-info';
import { withKnobs } from '@storybook/addon-knobs';

const MenuItem = getComponent<MenuItemProps>('MenuItem');
const Menu = getComponent<MenuProps>('Menu');
const Button = getComponent<ButtonProps>('Button');

const stories = storiesOf('Menu', module);

stories.addDecorator(withInfo);
stories.addDecorator(withKnobs);

stories.add('Basic Example', () => (
	<React.Fragment>
		<MenuDemo />
	</React.Fragment>
));

const MenuDemo = () => {
	const [visible, setVisible] = useState(false);
	const toggle = () => setVisible(!visible);

	return (
		<View
			style={{
				paddingTop: 50,
				// flexDirection: 'row',
				// justifyContent: 'center',
			}}
		>
			<Menu
				visible={visible}
				onDismiss={toggle}
				anchor={<Button onPress={toggle}>Show menu</Button>}
			>
				<MenuItem onPress={toggle} title="Item 1" />
				<MenuItem onPress={toggle} title="Item 2" />
				<Divider />
				<MenuItem onPress={toggle} title="Item 3" />
			</Menu>
		</View>
	);
};

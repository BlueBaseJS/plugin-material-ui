import { DrawerItemProps } from '@bluebase/components';
import React from 'react';
import { action } from '@storybook/addon-actions';
import { getComponent } from '@bluebase/core';
import storiesOf from '@bluebase/storybook-addon';
import { withInfo } from '@storybook/addon-info';
import { withKnobs } from '@storybook/addon-knobs';

const DrawerItem = getComponent<DrawerItemProps>('DrawerItem');

const stories = storiesOf('DrawerItem', module);

stories.addDecorator(withInfo);
stories.addDecorator(withKnobs);

stories.add('Default props', () => (
	<DrawerItem title="Item 1" />
));

stories.add('With Icon', () => (
	<DrawerItem title="Item 1" icon={{ name: 'favorite' }} />
));

stories.add('onPress listener', () => (
	<DrawerItem title="Click Me" icon={{ name: 'favorite' }} onPress={action('drawer-item-click')} />
));

stories.add('Active', () => (
	<DrawerItem title="Click Me" active />
));

stories.add('Disabled', () => (
	<DrawerItem title="Click Me" onPress={action('drawer-item-click')} disabled />
));

import { ListItemProps, ListProps, ListSubheaderProps } from '@bluebase/components';
import { getComponent } from '@bluebase/core';
import storiesOf from '@bluebase/storybook-addon';
import { action } from '@storybook/addon-actions';
import { text, withKnobs } from '@storybook/addon-knobs';
import React from 'react';

const ListItem = getComponent<ListItemProps>('ListItem');
const List = getComponent<ListProps>('List');
const ListSubheader = getComponent<ListSubheaderProps>('ListSubheader');

const stories = storiesOf('List', module);

stories.addDecorator(withKnobs);

stories.add('Default props', () => (
	<List>Foo</List>
));

stories.add('With List Items', () => (
	<List>
		<ListSubheader>{text('Children', 'List Section Header')}</ListSubheader>
		<ListItem title="Item A" onPress={action('drawer-item-click')} />
		<ListItem title="Item B" onPress={action('drawer-item-click')} />
		<ListItem title="Item C" onPress={action('drawer-item-click')} />
	</List>
));

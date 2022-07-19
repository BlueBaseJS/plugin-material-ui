import { getComponent } from '@bluebase/core';
import storiesOf from '@bluebase/storybook-addon';
import { withInfo } from '@storybook/addon-info';
import { boolean, text, withKnobs } from '@storybook/addon-knobs';
import React from 'react';

const ListSubheader = getComponent('ListSubheader');

const stories = storiesOf('ListSubheader', module);

stories.addDecorator(withInfo);
stories.addDecorator(withKnobs);

stories.add('Default props', () => (
	<ListSubheader inset={boolean('Inset', false)}>{text('Children', 'A Subheader Component')}</ListSubheader>
));

stories.add('Inset', () => (
	<ListSubheader inset>A Subheader Component with Inset applied</ListSubheader>
));

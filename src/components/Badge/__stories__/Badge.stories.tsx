import {
    Icon, /*ButtonProps*/
    BadgeProps
} from '@bluebase/components';
// import { action } from '@storybook/addon-actions';
import { getComponent } from '@bluebase/core';
import storiesOf from '@bluebase/storybook-addon';
import { withInfo } from '@storybook/addon-info';
import { withKnobs } from '@storybook/addon-knobs';
import React from 'react';
// import { getComponent } from '@bluebase/core';

// const Button = getComponent<ButtonProps>('Button');

const stories = storiesOf('Badge', module);

// const IconButton =getComponent("IconButton");
stories.addDecorator(withInfo);
stories.addDecorator(withKnobs);
const Badge = getComponent<BadgeProps>('Badge');
stories.add('Contained Badge', () => (
    <Badge style={{ marginTop: 40 }} badgeContent={"2"} variant={'standard'} showZero>
        <Icon name="star" size={20} color="green" />
    </Badge>
))


stories.add('Contained Badge with number prop', () => (
    <Badge style={{ marginTop: 40 }} badgeContent={"2"} variant={'standard'} showZero>
    {3}
    </Badge>
))
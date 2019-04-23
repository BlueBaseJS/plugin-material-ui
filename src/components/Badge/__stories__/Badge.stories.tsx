import {
    // Icon,
    Badge,
    // BadgeProps,
} from '@bluebase/components';
// import { getComponent } from '@bluebase/core';
import storiesOf from '@bluebase/storybook-addon';
import { withInfo } from '@storybook/addon-info';
import { withKnobs } from '@storybook/addon-knobs';
import React from 'react';

const stories = storiesOf('Badge', module);
stories.addDecorator(withInfo);
stories.addDecorator(withKnobs);
// const Badge = getComponent<BadgeProps>('Badge');
// const Icons: any = Icon;
// stories.add('Contained Badge', () => (
//     <Badge> 
//         <Icon name="star" size={20} color="red" />
//     </Badge>
// ))
stories.add('Contained Badge with number prop', () => (
    <Badge>
        4
    </Badge>
))
stories.add('With out child', () => (
    <Badge/>
))
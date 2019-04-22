import { ListIcon } from '@bluebase/components';
import React from 'react';
// import { action } from '@storybook/addon-ac2tions';
// import { getComponent } from '@bluebase/core';
import storiesOf from '@bluebase/storybook-addon';
import { withInfo } from '@storybook/addon-info';
import { withKnobs } from '@storybook/addon-knobs';
// const Button = getComponent<ButtonProps>('Button');

const stories = storiesOf('ListIcon', module);

stories.addDecorator(withInfo);
stories.addDecorator(withKnobs);

stories.add('ListIcon story', () => (
  <React.Fragment>
    <ListIcon name="inbox" />
  </React.Fragment>
));
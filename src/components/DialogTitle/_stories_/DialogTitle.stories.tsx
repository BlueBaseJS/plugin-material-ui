import { DialogTitleProps } from '@bluebase/components';
import { getComponent } from '@bluebase/core';
import storiesOf from '@bluebase/storybook-addon';
import { withInfo } from '@storybook/addon-info';
import { withKnobs } from '@storybook/addon-knobs';
import React from 'react';

const DialogTitle = getComponent<DialogTitleProps>('DialogTitle');

const stories = storiesOf('DialogTitle', module);

stories.addDecorator(withInfo);
stories.addDecorator(withKnobs);

stories

	.add('DialogTitle with children props', () => (
		<React.Fragment>
			<DialogTitle>
        Modal title
			</DialogTitle>
		</React.Fragment>
	));
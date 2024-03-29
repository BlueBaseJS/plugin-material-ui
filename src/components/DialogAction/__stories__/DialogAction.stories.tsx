import { DialogActionsProps } from '@bluebase/components';
import { getComponent } from '@bluebase/core';
import storiesOf from '@bluebase/storybook-addon';
import Button from '@material-ui/core/Button';
import { withInfo } from '@storybook/addon-info';
import { withKnobs } from '@storybook/addon-knobs';
import React from 'react';

const DialogAction = getComponent<DialogActionsProps>('DialogActions');

const stories = storiesOf('DialogAction', module);

stories.addDecorator(withInfo);
stories.addDecorator(withKnobs);

stories

	.add('DialogAction with children props', () => (
		<React.Fragment>
			<DialogAction style={{ display: 'flex', flexDirection: 'row-reverse' }}>
				<Button color="primary">
          Save changes
				</Button>
			</DialogAction>
		</React.Fragment >
	));
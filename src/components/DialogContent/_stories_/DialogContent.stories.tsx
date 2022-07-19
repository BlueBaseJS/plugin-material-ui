import { DialogContentProps } from '@bluebase/components';
import { getComponent } from '@bluebase/core';
import storiesOf from '@bluebase/storybook-addon';
import Typography from '@material-ui/core/Typography';
import { withInfo } from '@storybook/addon-info';
import { withKnobs } from '@storybook/addon-knobs';
import React from 'react';

const DialogContent = getComponent<DialogContentProps>('DialogContent');

const stories = storiesOf('DialogContent', module);

stories.addDecorator(withInfo);
stories.addDecorator(withKnobs);

stories

	.add('DialogContent with children props', () => (
		<React.Fragment>
			<DialogContent>
				<Typography gutterBottom>
					Cras mattis consectetur purus sit amet fermentum. Cras justo odio, dapibus ac
					facilisis in, egestas eget quam. Morbi leo risus, porta ac consectetur ac, vestibulum
					at eros.
				</Typography>
				<Typography gutterBottom>
					Praesent cmmodo cursus magna, vel scelerisque nisl consectetur et. Vivamus sagittis
					lacus vel augue laoreet rutrum faucibus dolor auctor.
				</Typography>
				<Typography gutterBottom>
					Aenean lacinia bibendum nulla sed consectetur. Praesent commodo cursus magna, vel
					scelerisque nisl consectetur et. Donec sed odio dui. Donec ullamcorper nulla non metus
					auctor fringilla.
				</Typography>
			</DialogContent >
		</React.Fragment >
	));
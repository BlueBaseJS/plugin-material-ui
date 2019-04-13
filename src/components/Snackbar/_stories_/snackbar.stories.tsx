import Button from '@material-ui/core/Button';
import React from 'react';
import { SnackbarProps } from '@bluebase/components';
import { getComponent } from '@bluebase/core';
import storiesOf from '@bluebase/storybook-addon';
import { withInfo } from '@storybook/addon-info';
import { withKnobs } from '@storybook/addon-knobs';
// import IconButton from '@material-ui/core/IconButton';
// import CloseIcon from '@material-ui/icons/Close';

const Snackbar = getComponent<SnackbarProps>('Snackbar');

const stories = storiesOf('Snackbar', module);

stories.addDecorator(withInfo);
stories.addDecorator(withKnobs);

stories

	.add('Snackbar', () => (
		<React.Fragment>
			<SimpleSnackbar

			/>
		</React.Fragment>
	));



function SimpleSnackbar() {
	// const classes = useStyles();
	const [open, setOpen] = React.useState(false);

	function handleClick() {
		setOpen(true);
	}

	function handleClose() {
		// if (reason === 'clickaway') {
		// 	return;
		// }

		setOpen(false);
	}

	return (
		<div>
			<Button onClick={handleClick}>Open simple snackbar</Button>
			<Snackbar
				// anchorOrigin={{
				// 	horizontal: 'left',
				// 	vertical: 'bottom',
				// }}
				onDismiss={handleClose}
				visible={open}
			// autoHideDuration={6000}
			// onClose={handleClose}
			// ContentProps={{
			// 'aria-describedby': 'message-id',
			// }}
			// message={<span id="message-id">Note archived</span>}
			// 	action={[
			// 		label="label"

			// 	<Button key="undo" color="secondary" size="small" onClick={handleClose}>
			// 		UNDO
			//   </Button>,
			// 	<IconButton
			// 		key="close"
			// 		aria-label="Close"
			// 		color="inherit"
			// 		className={classes.close}
			// //		onClick={handleClose}
			// 	>
			// 		<CloseIcon />
			// 	</IconButton>
			// 	]}
			>
				{'Snackbar'}
			</Snackbar>
		</div>
	);
}

export default SimpleSnackbar;
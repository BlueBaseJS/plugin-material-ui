import {
  DialogActionsProps,
  // DialogContentProps,
  // DialogProps,
  DialogTitleProps,
} from '@bluebase/components';

import AddIcon from '@material-ui/icons/Add';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';

import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import ListItemText from '@material-ui/core/ListItemText';
import PersonIcon from '@material-ui/icons/Person';
import React from 'react';
import Typography from '@material-ui/core/Typography';

// import { getComponent } from '@bluebase/core';
import storiesOf from '@bluebase/storybook-addon';
import { getComponent } from '@bluebase/core';


const Dialog = getComponent('Dialog');
const DialogAction = getComponent<DialogActionsProps>('DialogActions');
// const DialogContent = getComponent<DialogContentProps>('DialogContent');
const DialogTitle = getComponent<DialogTitleProps>('DialogTitle');

export interface Ipropsss {

	selectedValue: any,
	open: any,
	onClose: any

}
function SimpleDialog(props: Ipropsss) {
	const { onClose, selectedValue, ...other } = props;

	function handleClose() {
		onClose(selectedValue);
	}

	function handleListItemClick(value: any) {
		onClose(value);
	}

	return (
    <Dialog visible={true} onDismiss={handleClose} {...other}>
      <DialogTitle>Set backup account</DialogTitle>
      <List>
        <ListItem button onClick={() => handleListItemClick('addAccount')}>
          <ListItemAvatar>
            <Avatar>
              <AddIcon />
            </Avatar>
          </ListItemAvatar>
          <ListItemText primary="add account" />
        </ListItem>
        <ListItem button onClick={() => handleListItemClick('addAccount')}>
          <ListItemAvatar>
            <Avatar>
              <PersonIcon />
            </Avatar>
          </ListItemAvatar>
          <ListItemText primary="add account" />
        </ListItem>
      </List>
      <DialogAction>
        <Button color="primary">
          Save changes
              </Button>
      </DialogAction>
    </Dialog>
	);
}

function SimpleDialogDemo() {
	const [open, setOpen] = React.useState(false);
	const [selectedValue, setSelectedValue] = React.useState();

	function handleClickOpen() {
		setOpen(true);
	}

	const handleClose = (value: any) => {
		setOpen(false);
		setSelectedValue(value);
	};

	return (
    <div>
      <Typography variant="subtitle1">Selected: {selectedValue}</Typography>
      <br />
      <Button variant="outlined" color="primary" onClick={handleClickOpen}>
        Open simple dialog
        </Button>
      <SimpleDialog selectedValue={selectedValue} open={open} onClose={handleClose} />
    </div>
	);
}

export default SimpleDialogDemo;

storiesOf('Dialog', module)

  .add('fullDialog component with all components props', () => (
    <SimpleDialogDemo />

  ))




  .add('Dialog with all components props story', () => (
    <Dialog visible={true}>
      helloo child story
				</Dialog>
  ));

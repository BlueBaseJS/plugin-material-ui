import {
  DialogActionsProps,
  DialogContentProps,
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
import { Dialog } from '../index';
import Typography from '@material-ui/core/Typography';
import { getComponent } from '@bluebase/core';
import { shallow, mount } from 'enzyme';


test('DialogContent component should use child pr children', () => {

	const component = shallow(
    <SimpleDialogDemo />
  );
	expect(component.childAt(0).childAt(0).text()).toBeTruthy();

});



test('DialogContent component should use child prop to show children', () => {

	const component = mount(
    <Dialog visible={true}>

      <Button color="primary">
        Save changes
      </Button>
    </Dialog>
  );
   	expect(component.childAt(0).childAt(0).text()).toBeTruthy();

});



// const Dialog = getComponent<DialogProps>('Dialog');
const DialogAction = getComponent<DialogActionsProps>('DialogAction');
const DialogContent = getComponent<DialogContentProps>('DialogContent');
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
      <DialogContent>
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
      </DialogContent>
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
import {
  DialogActionsProps,
  // DialogContentProps,
  // DialogProps,

  DialogTitleProps,
} from '@bluebase/components';

import AddIcon from '@material-ui/icons/Add';
import Avatar from '@material-ui/core/Avatar';

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
const Card = getComponent('Card');
const View = getComponent('View');
const Image = getComponent('Image');
const Button = getComponent('Button');


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


storiesOf('Dialog', module)

  .add('fullDialog component with all components props', () => (
    <SimpleDialogDemo />

  ));


class DialogComponent extends React.Component {
	state = {
		visible: false,
	};

	_hideDialog = () => this.setState({ visible: !this.state.visible });

	render() {
		return (
      <>
        <Dialog
          visible={this.state.visible}
          onDismiss={this._hideDialog}
        >

          <Card visible>
            <View style={{ display: 'flex', justifyContent: 'center' } as any}>
              <Image
                style={{ width: 308, height: 250 } as any}
                source={{
                  uri: 'https://www.careerz360.pk/cdn.careerz360.pk/Content/UserData/empr/f1172787-3c92-459c-a5cc-5a9b7da8613e/profile_pics/thumbnail_bd47c439-bf95-4c30-8be8-fe77023194a0.png'
                }} />
              <Button style={{ color: 'blue' }} onPress={this._hideDialog}>
                close
                </Button>
            </View>
          </Card>
        </Dialog>
        <Button style={{ marginTop: 200 }} onPress={this._hideDialog}>
          Open Dialog
            </Button>

      </>
		);
	}
}


storiesOf('Dialog', module)

  .add('fullDialog component with all components props', () => (
    <DialogComponent />

  ));
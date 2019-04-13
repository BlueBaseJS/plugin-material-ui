import MuiSnackbar from '@material-ui/core/Snackbar';
import React from 'react';

const Snackbar = (props: any) => {

	return (
		<MuiSnackbar onClose={props.onDismiss} open={props.visible}{...props} >
			{props.children}
		</MuiSnackbar>

	);
};
export { Snackbar };
import { DialogPickerContext } from '../Picker/DialogPicker';
import { MenuItem } from '@material-ui/core';
import { PickerItemProps } from '@bluebase/components';
import React from 'react';

export const DialogPickerItem = ({ label, ...rest }: PickerItemProps) => (
	<DialogPickerContext.Consumer>
	{({ setValue }) => (
		<MenuItem {...rest} onClick={() => setValue(rest.value)}>
		{label}
		</MenuItem>
	)}
	</DialogPickerContext.Consumer>
);
import { DefaultPickerItem } from './DefaultPickerItem';
import { DialogPickerItem } from './DialogPickerItem';
import { DropDownPickerItem } from './DropDownPickerItem';
import { PickerContext } from '../Picker/PickerContext';
import { PickerItemProps } from '@bluebase/components';
import React from 'react';

export const PickerItem = (props: PickerItemProps) => (
	<PickerContext.Consumer>
	{(mode) => {

		if (mode === 'default') {
			return <DefaultPickerItem {...props} />;
		}

		if (mode === 'dialog') {
			return <DialogPickerItem {...props} />;
		}

		return <DropDownPickerItem {...props} />;
	}}
	</PickerContext.Consumer>
);
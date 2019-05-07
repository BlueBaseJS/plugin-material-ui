import { MenuItem } from '@material-ui/core';
import { PickerItemProps } from '@bluebase/components';
import React from 'react';

export const DropDownPickerItem = ({ label, ...rest }: PickerItemProps) => (
	<MenuItem {...rest}>{label}</MenuItem>
);
import { PickerItemProps } from '@bluebase/components';
import MenuItem from '@material-ui/core/MenuItem';
import React from 'react';

export const PickerItem = ({ label, value, ...rest }: PickerItemProps) => (
	<MenuItem {...rest as any} value={value || (rest as any)['data-value']}>
		{label}
	</MenuItem>
);

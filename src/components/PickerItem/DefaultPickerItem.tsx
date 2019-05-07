import { PickerItemProps } from '@bluebase/components';
import React from 'react';

export const DefaultPickerItem = ({ label, ...rest }: PickerItemProps) => (
	<option {...rest}>{label}</option>
);
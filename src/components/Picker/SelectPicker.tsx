import { PickerDefaultProps, PickerItem } from '@bluebase/components';
import Select, { SelectProps } from '@material-ui/core/Select';
import FilledInput from '@material-ui/core/FilledInput';
import Input from '@material-ui/core/Input';
import OutlinedInput from '@material-ui/core/OutlinedInput';
import React from 'react';

export const SelectPicker = (props: SelectProps & any) => {

	const {
		children,
		disabled,
		displayEmpty,
		error,
		id,
		name,
		mode,
		onChange,
		readOnly,
		value,
		placeholder,
		variant,
	} = props;

	let InputComponent = Input;

	if (variant === 'filled') {
		InputComponent = FilledInput;
	}
	if (variant === 'outlined') {
		InputComponent = OutlinedInput as any;
	}

	const selectProps = {
		disabled,
		displayEmpty,
		error,
		input: <InputComponent {...{ id, name, }} />,
		native: mode === 'default',
		onChange,
		readOnly,
		value,
	};

	return (
		<Select {...selectProps}>
			{placeholder ? <PickerItem value="" label={placeholder} disabled /> : null}
			{children}
		</Select>
	);
};

SelectPicker.defaultProps = {
	...PickerDefaultProps,
	PickerItem,
};

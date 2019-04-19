import { DialogProps, PickerDefaultProps, PickerItem as BBPickerItem, PickerProps } from '@bluebase/components';
import FilledInput from '@material-ui/core/FilledInput';
import FormControl from '@material-ui/core/FormControl';
import FormHelperText from '@material-ui/core/FormHelperText';
import Input from '@material-ui/core/Input';
import InputLabel from '@material-ui/core/InputLabel';
import OutlinedInput from '@material-ui/core/OutlinedInput';
import React from 'react';
import Select from '@material-ui/core/Select';
import { getComponent } from '@bluebase/core';
import { objectMapper } from '@bluebase/component-mapper';

const fieldMap = {
	displayEmpty: ({ placeholder }: PickerProps) => !!placeholder,
	native: ({ mode }: PickerProps) => mode !== 'default' ? false : true,
	onChange: 'onChange',
	value: 'selectedValue',

	// onChange: ({ onChange, onValueChange }: any) => (event: any, value: number) => {
	// 	if (onChange) {
	// 		onChange(event, value);
	// 	}

	// 	if (onValueChange) {
	// 		onValueChange(event.target.value, event.target.selectedIndex);
	// 	}

	// 	if (onValueChange) {
	// 		onValueChange(event.target.value, event.target.selectedIndex);
	// 	}
	// }

};

export const Picker = (props: PickerProps & { PickerItem?: typeof BBPickerItem }) => {
	const Dialog = getComponent<DialogProps>('Dialog');
	const newProps = objectMapper(props, fieldMap, {
		ignore: ['onValueChange', 'selectedValue'],
		rest: true,
	});

	const {
		children,
		disabled,
		displayEmpty,
		error,
		helperText,
		id,
		label,
		mode,
		name,
		native,
		onChange,
		readOnly,
		value,
		placeholder,
		required,
		variant,
		visible,
		PickerItem,
		...rest
	} = newProps;

	let InputComponent = Input;

	if (variant === 'filled') {
		InputComponent = FilledInput;
	}
	if (variant === 'outlined') {
		InputComponent = OutlinedInput as any;
	}

	const formControlProps = {
		disabled,
		error,
		required,
		variant,
		...rest
	};

	const selectProps = {
		displayEmpty,
		input: <InputComponent {...{ id, name, }} />,
		// inputProps: { id, name, },
		native,
		onChange,
		readOnly,
		value,


	};

	if (mode === 'dialog') {
		return (
			<>
				<Dialog visible={visible}>
					{children}
				</Dialog>
				<FormControl {...formControlProps}>
					{label ? <InputLabel htmlFor={id}>{label}</InputLabel> : null}
					<Select
						inputProps={{ onFocus: onChange }}
						{...selectProps}
					/>
					{helperText ? <FormHelperText>{helperText}</FormHelperText> : null}
				</FormControl>
			</>
		);

	}
	return (
		<FormControl {...formControlProps}>
			{label ? <InputLabel htmlFor={id}>{label}</InputLabel> : null}
			<Select  {...selectProps} >
				{placeholder ? <PickerItem value="" label={placeholder} disabled /> : null}
				{children}
			</Select>
			{helperText ? <FormHelperText>{helperText}</FormHelperText> : null}
		</FormControl>
	);
};

Picker.defaultProps = {
	...PickerDefaultProps,
	PickerItem: BBPickerItem,
};

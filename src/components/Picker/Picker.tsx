import { PickerDefaultProps, PickerItem as PickerItemBB, PickerProps } from '@bluebase/components';
import React, { isValidElement } from 'react';

import FormControl from '@material-ui/core/FormControl';
import FormHelperText from '@material-ui/core/FormHelperText';
import InputLabel from '@material-ui/core/InputLabel';
import Select from '@material-ui/core/Select';
import { StyleSheet } from 'react-native';
import { objectMapper } from '@bluebase/component-mapper';

(Select as React.ComponentType).displayName = 'Select';
(FormControl as any).displayName = 'FormControl';
(FormHelperText as any).displayName = 'FormHelperText';
(InputLabel as any).displayName = 'InputLabel';

const fieldMap = {
	displayEmpty: ({ placeholder }: PickerProps) => !!placeholder,
	native: ({ mode }: PickerProps) => (mode !== 'default' ? false : true),
	value: 'selectedValue',

	onChange: ({ onChange, onValueChange }: any) => (event: any, value: number) => {
		if (onChange) {
			onChange(event, value);
		}

		if (onValueChange) {
			onValueChange(event.target.value, event.target.selectedIndex);
		}
	},

	PickerItem: 'PickerItem',
	children: 'children',
	classes: 'classes',
	disabled: 'disabled',
	error: 'error',
	helperText: 'helperText',
	id: 'id',
	label: 'label',
	mode: 'mode',
	name: 'name',
	placeholder: 'placeholder',
	readOnly: 'readOnly',
	required: 'required',
	style: ({ style }: PickerProps) => StyleSheet.flatten(style),
	variant: 'variant',
};

export const Picker = (props: PickerProps & { PickerItem?: typeof PickerItemBB }) => {
	const newProps = objectMapper(props, fieldMap);

	const {
		children,
		disabled,
		displayEmpty,
		error,
		helperText,
		id,
		label,
		name,
		native,
		onChange,
		readOnly,
		value,
		placeholder,
		required,
		variant,
		PickerItem,
		...rest
	} = newProps;

	const items = React.Children.map(children, (child) => {
		if (!isValidElement(child)) {
			return null;
		}

		const childProps: any = child.props;

		return React.cloneElement(child, {
			...childProps,
			children: childProps.children || childProps.label,
		});
	});

	return (
		<FormControl
			{...{
				disabled,
				error,
				required,
				variant,
				...rest,
			}}
		>
			<InputLabel id={`${id}-label`}>{label}</InputLabel>
			<Select
				{...{
					displayEmpty: false,
					id,
					labelId: `${id}-label`,
					name,
					onChange,
					readOnly,
					value,
				}}
			>
				{placeholder ? <PickerItem value="" label={<em>{placeholder}</em>} disabled /> : null}
				{items}
			</Select>
			{helperText ? <FormHelperText>{helperText}</FormHelperText> : null}
		</FormControl>
	);
};

Picker.defaultProps = {
	...PickerDefaultProps,
	PickerItem: PickerItemBB,
};

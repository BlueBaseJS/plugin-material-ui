import { PickerDefaultProps, PickerItem as BBPickerItem, PickerProps } from '@bluebase/components';
import FormControl from '@material-ui/core/FormControl';
import FormHelperText from '@material-ui/core/FormHelperText';
import InputLabel from '@material-ui/core/InputLabel';
import React from 'react';
import { objectMapper } from '@bluebase/component-mapper';
import { PickerContext } from './PickerContext';
import { SelectPicker } from './SelectPicker';
import { DialogPicker } from './DialogPicker';

const fieldMap = {
	displayEmpty: ({ placeholder }: PickerProps) => !!placeholder,
	native: ({ mode }: PickerProps) => mode !== 'default' ? false : true,
	value: 'selectedValue',

	onChange: ({ onChange, onValueChange }: any) => (event: any, value: number)  => {
		if (onChange) {
			onChange(event, value);
		}

		if (onValueChange) {
			onValueChange(event.target.value, event.target.selectedIndex);
		}
	}

};

export const Picker = (props: PickerProps & { PickerItem?: typeof BBPickerItem }) => {

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
		PickerItem,
		...rest
	} = newProps;

	const formControlProps = {
		disabled,
		error,
		required,
		variant,
		...rest
	};

	const PickerComponent = mode === 'dialog' ? DialogPicker : SelectPicker;

	return (
		<PickerContext.Provider value={mode}>
			<FormControl {...formControlProps}>
				{label ? <InputLabel htmlFor={id}>{label}</InputLabel> : null}
				<PickerComponent {...props as any} />
				{helperText ? <FormHelperText>{helperText}</FormHelperText> : null}
			</FormControl>
		</PickerContext.Provider>
	);
};

Picker.defaultProps = {
	...PickerDefaultProps,
	PickerItem: BBPickerItem,
};

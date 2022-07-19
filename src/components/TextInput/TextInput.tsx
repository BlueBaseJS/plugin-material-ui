import { TextInputDefaultProps, TextInputProps } from '@bluebase/components';
import { InputAdornment } from '@material-ui/core';
import MUITextInput from '@material-ui/core/TextField';
import React, { useCallback } from 'react';
import { StyleSheet } from 'react-native';

export const TextInput = (props: TextInputProps) => {
	const {
		autoComplete,
		autoCorrect,
		autoFocus,
		disabled,
		editable,
		spellCheck,
		label,
		multiline,
		numberOfLines,
		onBlur,
		onFocus,
		onChange,
		onChangeText,
		id,
		helperText,
		name,
		placeholder,
		secureTextEntry,
		keyboardType,
		required,
		type,
		variant,
		value,
		defaultValue,
		error,
		left,
		right,
		style,
	} = props;

	let _type;

	switch (keyboardType) {
		case 'email-address':
			_type = 'email';
			break;
		case 'number-pad':
		case 'numeric':
			_type = 'number';
			break;
		case 'phone-pad':
			_type = 'tel';
			break;
		case 'search' as any:
		case 'web-search':
			_type = 'search';
			break;
		case 'url':
			_type = 'url';
			break;
		default:
			_type = 'text';
	}

	if (secureTextEntry) {
		_type = 'password';
	}

	if (type) {
		_type = type;
	}

	const _onBlur = useCallback((event: any) => {
		onBlur?.(event);
	}, [onBlur]);

	const _onFocus = useCallback((event: any) => {
		onFocus?.(event);
	}, [onFocus]);

	const _onChange = useCallback((event: any) => {
		onChange?.(event);
		onChangeText?.(event.target.value);
	}, [onChange, onChangeText]);

	return (
		<MUITextInput
			autoCorrect={autoCorrect ? 'on' : 'off'}
			spellCheck={spellCheck}
			autoComplete={autoComplete}
			autoFocus={autoFocus}
			disabled={disabled ?? !editable}
			type={_type}
			onBlur={_onBlur}
			onFocus={_onFocus}
			onChange={_onChange}
			minRows={numberOfLines}
			multiline={multiline}
			label={label}
			id={id}
			helperText={helperText}
			name={name}
			placeholder={placeholder}
			required={required}
			variant={variant}
			value={value}
			defaultValue={defaultValue}
			error={error}
			InputProps={{
				startAdornment: left
					? <InputAdornment position="start">{left}</InputAdornment>
					: undefined,

				endAdornment: right
					? <InputAdornment position="end">{right}</InputAdornment>
					: undefined,
			}}
			style={StyleSheet.flatten(style) as any}
		/>
	);
};

TextInput.defaultProps = TextInputDefaultProps;
TextInput.displayName = 'TextInput';

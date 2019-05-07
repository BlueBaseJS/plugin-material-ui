import { Dialog, PickerDefaultProps, PickerItem } from '@bluebase/components';
import React, { createContext } from 'react';
import FilledInput from '@material-ui/core/FilledInput';
import Input from '@material-ui/core/Input';
import OutlinedInput from '@material-ui/core/OutlinedInput';
import { SelectProps } from '@material-ui/core/Select';

export interface DialogPickerState {
	value?: any;
	visible: boolean;
	setValue: (value: any) => void;
}

export const DialogPickerContext: React.Context<DialogPickerState> = createContext(undefined as any);

export class DialogPicker extends React.PureComponent<SelectProps, DialogPickerState> {

	static defaultProps = {
		...PickerDefaultProps,
		PickerItem,
	};

	readonly state: DialogPickerState = {
		setValue: (value: any) => this.setState({ value, visible: !this.state.visible }),
		visible: false,
	};

	toggleDialog = () => this.setState({ visible: !this.state.visible });



	componentWillMount() {
		this.setState({ value: this.props.value });
	}
	render() {

		const {
			children,
			disabled,
			displayEmpty,
			error,
			id,
			name,
			// native,
			// onChange,
			readOnly,
			// value,
			placeholder,
			variant,
		} = this.props;

		let InputComponent = Input;

		if (variant === 'filled') {
			InputComponent = FilledInput;
		}
		if (variant === 'outlined') {
			InputComponent = OutlinedInput as any;
		}

		const selectProps = {
			id, name,

			disabled,
			displayEmpty,
			error,
			input: <InputComponent {...{ id, name, }} />,
			// native,
			// onChange,
			readOnly,
			value: this.state.value,
		};

		return (
			<DialogPickerContext.Provider value={this.state}>
				<Dialog visible={this.state.visible} onDismiss={this.toggleDialog} >
					{placeholder ? <PickerItem value="" label={placeholder} disabled /> : null}
					{children}
        </Dialog>
				<InputComponent {...selectProps} onClick={this.toggleDialog} />,
			</DialogPickerContext.Provider>
		);
	}
}


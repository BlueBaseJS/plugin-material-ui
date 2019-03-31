import { Picker } from '@bluebase/components';
import React from 'react';
// import { action } from '@storybook/addon-actions';
import { action } from '@storybook/addon-actions';
import storiesOf from '@bluebase/storybook-addon';
import { withInfo } from '@storybook/addon-info';
import { withKnobs } from '@storybook/addon-knobs';

// class ControlledPicker extends React.Component<PickerProps> {
// 	state = {
// 		language: undefined,
// 	};

// 	handleChange = (value: string, position: number) => {
// 		console.log(`picker value change: [${value}, ${position}]`);
// 		this.setState({ value });
// 	}

// 	render() {
// 		return (
// 			<Picker
// 				selectedValue={this.state.language}
// 				style={{ height: 50, width: 100 }}
// 				onValueChange={this.handleChange}
// 				mode="default"
// 				label="Language"
// 				helperText="Chose your favorite programming language"
// 			>
// 				<Picker.Item label="Java" value="java" />
// 				<Picker.Item label="JavaScript" value="js" />
// 				<Picker.Item label="PHP" value="php" />
// 			</Picker>
// 		);
// 	}
// }


const stories = storiesOf('Picker', module);

stories.addDecorator(withInfo);
stories.addDecorator(withKnobs);

stories

.add('Simple', () => (
	<Picker
		onValueChange={action('Picker')}
		label="Language"
		name="language"
		id="language-simple"
	>
		<Picker.Item label="Java" value="java" />
		<Picker.Item label="JavaScript" value="js" />
		<Picker.Item label="PHP" value="php" />
	</Picker>
))

.add('Helper Text', () => (
	<Picker
		onValueChange={action('Picker')}
		mode="default"
		label="Language"
		helperText="Chose your favorite programming language"
		name="language"
		id="language-simple"
	>
		<Picker.Item label="Java" value="java" />
		<Picker.Item label="JavaScript" value="js" />
		<Picker.Item label="PHP" value="php" />
	</Picker>
))

.add('Without Label', () => (
	<Picker
		onValueChange={action('Picker')}
		mode="default"
		helperText="Without label"
		name="language"
		id="language-simple"
	>
		<Picker.Item label="Java" value="java" />
		<Picker.Item label="JavaScript" value="js" />
		<Picker.Item label="PHP" value="php" />
	</Picker>
))

.add('Disabled', () => (
	<Picker
		onValueChange={action('Picker')}
		mode="default"
		label="Language"
		helperText="Chose your favorite programming language"
		name="language"
		id="language-simple"
		disabled
	>
		<Picker.Item label="Java" value="java" />
		<Picker.Item label="JavaScript" value="js" />
		<Picker.Item label="PHP" value="php" />
	</Picker>
))

.add('Error', () => (
	<Picker
		onValueChange={action('Picker')}
		mode="default"
		label="Language"
		helperText="Chose your favorite programming language"
		name="language"
		id="language-simple"
		error
	>
		<Picker.Item label="Java" value="java" />
		<Picker.Item label="JavaScript" value="js" />
		<Picker.Item label="PHP" value="php" />
	</Picker>
))

.add('Placeholder', () => (
	<Picker
		onValueChange={action('Picker')}
		mode="default"
		label="Language"
		helperText="Chose your favorite programming language"
		name="language"
		id="language-simple"
		placeholder="None"
	>
		<Picker.Item label="Java" value="java" />
		<Picker.Item label="JavaScript" value="js" />
		<Picker.Item label="PHP" value="php" />
	</Picker>
))


.add('Required', () => (
	<Picker
		onValueChange={action('Picker')}
		mode="default"
		label="Language"
		helperText="Chose your favorite programming language"
		name="language"
		id="language-simple"
		placeholder="None"
		required
	>
		<Picker.Item label="Java" value="java" />
		<Picker.Item label="JavaScript" value="js" />
		<Picker.Item label="PHP" value="php" />
	</Picker>
))


.add('Outlined', () => (
	<Picker
		onValueChange={action('Picker')}
		mode="default"
		label="Language"
		helperText="Chose your favorite programming language"
		name="language"
		id="language-simple"
		placeholder="None"
		variant="outlined"
		style={{ marginTop: 20 }}
	>
		<Picker.Item label="Java" value="java" />
		<Picker.Item label="JavaScript" value="js" />
		<Picker.Item label="PHP" value="php" />
	</Picker>
))

.add('Filled', () => (
	<Picker
		onValueChange={action('Picker')}
		mode="default"
		label="Language"
		helperText="Chose your favorite programming language"
		name="language"
		id="language-simple"
		placeholder="None"
		variant="filled"
	>
		<Picker.Item label="Java" value="java" />
		<Picker.Item label="JavaScript" value="js" />
		<Picker.Item label="PHP" value="php" />
	</Picker>
))

;
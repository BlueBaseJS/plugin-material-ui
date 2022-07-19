import { Radio, RadioGroup, RadioGroupProps } from '@bluebase/components';
import storiesOf from '@bluebase/storybook-addon';
import { action } from '@storybook/addon-actions';
import { withInfo } from '@storybook/addon-info';
import { withKnobs } from '@storybook/addon-knobs';
import React from 'react';

class ControlledRadioGroup extends React.PureComponent<RadioGroupProps, { value: RadioGroupProps['value'] }> {

	// static state = {
	// 	value: 'option-b'
	// };
	constructor(props: RadioGroupProps) {
		super(props);

		this.state = {
			value: this.props.value
		};
	}

	render() {

		const handleChange = (value: any) => {
			this.setState({ value });
			action('Controlled RadioGroup')(value);
		};

		return (
			<RadioGroup onValueChange={handleChange} value={this.state.value}>
				{this.props.children}
			</RadioGroup>
		);
	}
}

const stories = storiesOf('RadioGroup', module);

stories.addDecorator(withInfo);
stories.addDecorator(withKnobs);

stories.add('Uncontrolled', () => (
	<RadioGroup onValueChange={action('Uncontrolled RadioGroup')} label="Options" helperText="Chose any">
		<Radio label="Option A" value="option-a" />
		<Radio label="Option B" value="option-b" />
		<Radio label="Option C" value="option-c" />
	</RadioGroup>
));

stories.add('Controlled', () => (
	<ControlledRadioGroup value="option-c">
		<Radio label="Option A" value="option-a" />
		<Radio label="Option B" value="option-b" />
		<Radio label="Option C" value="option-c" />
	</ControlledRadioGroup>
));


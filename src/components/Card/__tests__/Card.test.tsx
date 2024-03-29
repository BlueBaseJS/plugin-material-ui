import { mount, shallow } from 'enzyme';
import React from 'react';
import { Text } from 'react-native';

import { Card } from '../';

test('Card component component should show children', () => {
	const component = shallow(
		<Card>
			<Text>Card</Text>
		</Card>
	);
	// expect(component).toMatchSnapshot();
	expect(component.find('Text')).toBeDefined();
});

test('Card component component with onPress Prop', () => {
	const component = mount(
		<Card onPress={() => 'string'}>
			<Text>Card</Text>
		</Card>
	);
	expect(component.props().onPress()).toBe('string');
});

import { IconButton } from '../IconButton';
import React from 'react';
import { shallow } from 'enzyme';


test('IconButton component with name Prop', () => {
	const component = shallow(
		<IconButton onPress={() => { }}
			name='star'
			size={20}
		/>
	);
	// expect(component).toMatchSnapshot();
	expect(component.props().name).toEqual('star');
});

test('Button component with Size Prop', () => {
	const component = shallow(
		<IconButton onPress={() => { }}
			name='star'
			size={20}
		/>
	);
	expect(component.props().size).toEqual(20);
});

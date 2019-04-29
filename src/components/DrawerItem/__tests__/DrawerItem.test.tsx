import { DrawerItem } from '../DrawerItem';
import React from 'react';
import { Text } from 'react-native';
import { shallow } from 'enzyme';

describe('DrawerItem', () => {

	test('should forward title prop as primary', () => {
		const component = shallow(
			<DrawerItem title="Item 1" />
		);
		// expect(component).toMatchSnapshot();

		expect(component.props().children[1].props.primary).toEqual('Item 1');
		expect(component.props().children[1].props.inset).toEqual(false);
	});

	test('should forward left and right as children, set inset to true', () => {
		const component = shallow(
			<DrawerItem title="Item 1" icon={{ name: 'rocket' }} right={<Text>R</Text>} />
		);

		expect(component.props().children[0].props.name).toBe('rocket');
		expect(component.props().children[1].props.inset).toEqual(true);
		expect(component.props().children[2].props.children).toEqual('R');
	});

	test('should not render anything in main area if no title or description', () => {
		const component = shallow(
			<DrawerItem title={null as any} icon={{ name: 'rocket' }} right={<Text>R</Text>} />
		);
		// expect(component).toMatchSnapshot();
		expect(component.props().children[0].props.name).toBe('rocket');
		expect(component.props().children[2].props.children).toEqual('R');
	});

});

import { shallow } from 'enzyme';
import React from 'react';
import { View } from 'react-native';

import { ListItem } from '../ListItem';

describe('ListItem', () => {

	test('should forward title prop as primary', () => {
		const component = shallow(
			<ListItem title="Item 1" />
		);
		expect(component.childAt(0).props().primary).toEqual('Item 1');
		// expect(component.childAt(0).props().inset).toEqual(false);
	});

	test('should forward description prop as secondary', () => {
		const component = shallow(
			<ListItem title={null as any} description="A description" />
		);
		expect(component.childAt(0).props().secondary).toEqual('A description');
		// expect(component.childAt(0).props().inset).toEqual(false);
	});

	test('should forward left and right as children, set inset to true', () => {
		const component = shallow(
			<ListItem title="Item 1" left={<View>L</View>} right={<View>R</View>} />
		);
		expect(component.childAt(0).childAt(0).text()).toEqual('L');
		// expect(component.childAt(1).props().inset).toEqual(true);
		expect(component.childAt(2).childAt(0).text()).toEqual('R');
	});

	test('should not render anything in main area if no title or description', () => {
		const component = shallow(
			<ListItem title={null as any} left={<View>L</View>} right={<View>R</View>} />
		);
		// expect(component).toMatchSnapshot();
		expect(component.childAt(0).childAt(0).text()).toEqual('L');
		expect(component.childAt(1).childAt(0).text()).toEqual('R');
	});

});

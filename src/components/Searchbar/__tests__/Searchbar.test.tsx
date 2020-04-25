import React from 'react';
import { Searchbar } from '../Searchbar';
import { shallow } from 'enzyme';

describe('Searchbar', () => {
	test('should forward title prop as primary', () => {
		const component = shallow(<Searchbar title="Item 1" />);
		// expect(component).toMatchSnapshot();

		expect(component.find('ListItem').first().prop('title')).toEqual('Item 1');
	});

	test('should forward title and icon prop', () => {
		const component = shallow(<Searchbar title="Item 1" icon={{ name: 'red' }} />);
		expect(component.find('ListItem').first().prop('title')).toEqual('Item 1');
	});

	// test('should forward left and right as children, set inset to true', () => {
	// 	const component = shallow(
	// 		<Searchbar title="Item 1" icon={{ name: 'rocket' }} right={<Text>R</Text>} />
	// 	);

	// 	expect(component.props().children[0].props.name).toBe('rocket');
	// 	expect(component.props().children[1].props.inset).toEqual(true);
	// 	expect(component.props().children[2].props.children).toEqual('R');
	// });

	// test('should not render anything in main area if no title or description', () => {
	// 	const component = shallow(
	// 		<Searchbar title={null as any} icon={{ name: 'rocket' }} right={<Text>R</Text>} />
	// 	);
	// 	// expect(component).toMatchSnapshot();
	// 	expect(component.props().children[0].props.name).toBe('rocket');
	// 	expect(component.props().children[2].props.children).toEqual('R');
	// });
});

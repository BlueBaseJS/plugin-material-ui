import { Button } from '../Button';
import React from 'react';
import { Text } from 'react-native';
import { shallow } from 'enzyme';


test('Button component should use title prop to show children', () => {
	const component = shallow(
		<Button title="title" />
	);
	expect(component.props().title).toEqual('title');
});



test('Button component should use children prop to show content', () => {
	const component = shallow(
		<Button title="Foo" loading={true} />
	);
	expect(component.props().loading).toEqual(true);
});



test('Button component should use title prop to show content', () => {
	const component = shallow(
		<Button title="Foo" loading={false} />
	);
	expect(component.props().title).toEqual('Foo');
});



test('Button component should  return loading true', () => {
	const component = shallow(
		<Button loading={true}>
			<Text>Bar</Text>
		</Button>
	);
	expect(component.props().children).toBeDefined();
});


test('Button component should return loading false', () => {
	const component = shallow(
		<Button loading={false}>
			<Text>Bar</Text>
		</Button>);
	expect(component.props().loading).toEqual(false);
});



test('Button component should use children prop to show content', () => {
	const wrapper = shallow(
		<Button />);
	expect(wrapper.type()).toBeFalsy();
});

import { Button } from '../Button';
import React from 'react';
import { Text } from 'react-native';
import { mount,  shallow } from 'enzyme';
import Plugin from '../../../index';
import { BlueBaseApp } from '@bluebase/core';


test('Button component should use title prop to show children', () => {
	const component = mount(
		<BlueBaseApp plugins={[Plugin]}>
			<Button title="Foo" />
		</BlueBaseApp>
	);
	expect(component).toMatchSnapshot();
	expect(component.find('Button').prop('title')).toEqual('Foo');
});

test('Button component should use children prop to show content', () => {
	const component = shallow(
		<Button title="Foo">
			<Text>Bar</Text>
		</Button>
	);
	// expect(component).toMatchSnapshot();
	expect(component.find('Text').text()).toEqual('Bar');
});

import { BlueBaseApp } from '@bluebase/core';
import { Button } from '@bluebase/components';
import Plugin from '../../../index';
import React from 'react';
import { Text } from 'react-native';
import { mount } from 'enzyme';
import { waitForElement } from 'enzyme-async-helpers';

describe('Button', () => {
	// test('Button component should use title prop to show children', async () => {
	// 	const component = mount(
	// 		<BlueBaseApp plugins={[Plugin]}>
	// 			<Button title="Foo" />
	// 		</BlueBaseApp>
	// 	);
	// 	await waitForElement(component, Button);

	// 	expect(
	// 		component
	// 			.find('Button')
	// 			.first()
	// 			.prop('title')
	// 	).toEqual('Foo');
	// });

	test('Button component should use children prop to show content', async () => {
		const component = mount(
			<BlueBaseApp plugins={[Plugin]}>
				<Button title="Foo">
					<Text>Bar</Text>
				</Button>
			</BlueBaseApp>
		);
		await waitForElement(component, Button);

		expect(
			component
				.find('Text')
				.last()
				.text()
		).toEqual('Bar');
	});

	it('should disable the button when disabled is true ', async () => {
		const component = mount(
			<BlueBaseApp plugins={[Plugin]}>
				<Button disabled />
			</BlueBaseApp>
		);
		await waitForElement(component, Button);
		expect(
			component
				.find('Button')
				.first()
				.prop('disabled')
		).toEqual(true);
	});

	it('should pass the color as is when set to "primary"', async () => {
		const component = mount(
			<BlueBaseApp plugins={[Plugin]}>
				<Button color="primary" />
			</BlueBaseApp>
		);
		await waitForElement(component, Button);

		expect(
			component
				.find('Button')
				.last()
				.prop('color')
		).toEqual('default');
	});

	it('should pass the color as is when set to "secondary"', async () => {
		const component = mount(
			<BlueBaseApp plugins={[Plugin]}>
				<Button color="secondary" />
			</BlueBaseApp>
		);
		await waitForElement(component, Button);

		expect(
			component
				.find('Button')
				.first()
				.prop('color')
		).toBe('secondary');
	});

	it('should pass the color as is when set to "default"', async () => {
		const component = mount(
			<BlueBaseApp plugins={[Plugin]}>
				<Button color="default" />
			</BlueBaseApp>
		);
		await waitForElement(component, Button);

		expect(
			component
				.find('Button')
				.last()
				.prop('color')
		).toEqual('default');
	});

	it('should pass the color as "default" when no color is given', async () => {
		const component = mount(
			<BlueBaseApp plugins={[Plugin]}>
				<Button />
			</BlueBaseApp>
		);
		await waitForElement(component, Button);

		expect(
			component
				.find('Button')
				.last()
				.prop('color')
		).toEqual('default');
	});

	it('should pass the color as given', async () => {
		const component = mount(
			<BlueBaseApp plugins={[Plugin]}>
				<Button color={'#000000'} />
			</BlueBaseApp>
		);
		await waitForElement(component, Button);
		expect(
			component
				.find('Button')
				.last()
				.prop('color')
		).toBeDefined();
	});

	it('should loading the button when loading is true ', async () => {
		const component = mount(
			<BlueBaseApp plugins={[Plugin]}>
				<Button loading />
			</BlueBaseApp>
		);
		await waitForElement(component, Button);
		// expect(component).toMatchSnapshot()
		expect(component.find('Button ActivityIndicator').length).toBeGreaterThan(0);
	});

	it('should display icon on button when icon is given ', async () => {
		const component = mount(
			<BlueBaseApp plugins={[Plugin]}>
				<Button icon={{ type: 'icon', name: 'favorite' }} />
			</BlueBaseApp>
		);
		await waitForElement(component, Button);
		expect(
			component
				.find('Button')
				.first()
				.prop('icon')
		).toBeDefined();
	});
});

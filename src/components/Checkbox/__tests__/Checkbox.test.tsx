import { Checkbox } from '../Checkbox';
import React from 'react';
import { mount } from 'enzyme';
import { BlueBaseApp } from '@bluebase/core';
import Plugin from '../../../index';
import { waitForElement } from 'enzyme-async-helpers';


describe('Checkbox', () => {

	it('should set the checked to true when checked is true', async () => {
		const component = mount(
			<BlueBaseApp plugins={[Plugin]}>
				<Checkbox checked />
			</BlueBaseApp>
		);

		await waitForElement(component, Checkbox);

		// expect(component).toMatchSnapshot();
		expect(component.find('Checkbox').first().prop('checked')).toEqual(true);
	});

	it('should set the checked to false when checked is false', async () => {
		const component = mount(
			<BlueBaseApp plugins={[Plugin]}>
				<Checkbox checked={false} />
			</BlueBaseApp>
		);

		await waitForElement(component, Checkbox);

		expect(component.find('Checkbox').first().prop('checked')).toEqual(false);
	});

	it('should pass the color as is when set to "primary"', async () => {
		const component = mount(
			<BlueBaseApp plugins={[Plugin]}>
				<Checkbox color="primary" />
			</BlueBaseApp>
		);

		await waitForElement(component, Checkbox);

		expect(component.find('Checkbox').first().prop('color')).toEqual('primary');
	});

	it('should pass the color as is when set to "secondary"', async () => {
		const component = mount(
			<BlueBaseApp plugins={[Plugin]}>
				<Checkbox color="secondary" />
			</BlueBaseApp>
		);

		await waitForElement(component, Checkbox);

		expect(component.find('Checkbox').first().prop('color')).toEqual('secondary');
	});

	it('should pass the color as is when set to "default"', async () => {
		const component = mount(
			<BlueBaseApp plugins={[Plugin]}>
				<Checkbox color="default" />
			</BlueBaseApp>
		);

		await waitForElement(component, Checkbox);

		expect(component.find('Checkbox').first().prop('color')).toEqual('default');
	});

	it('should set the color prop to undefined and create classed for custom colors', async () => {
		const component = mount(
			<BlueBaseApp plugins={[Plugin]}>
				<Checkbox color="red" />
			</BlueBaseApp>
		);

		await waitForElement(component, Checkbox);
		// expect(component).toMatchSnapshot();
		expect(component.find('WithStyles(Checkbox)').first().prop('classes')).toBeTruthy();
		expect(component.find('WithStyles(Checkbox)').first().prop('color')).toEqual(undefined);
	});

	it('should set the label component', async () => {
		const component = mount(
			<BlueBaseApp plugins={[Plugin]}>
				<Checkbox label="Foo" />
			</BlueBaseApp>
		);

		await waitForElement(component, Checkbox);
		// expect(component).toMatchSnapshot();
		expect(component.find('FormControlLabel').length).toBeGreaterThan(0);
		expect(component.find('FormControlLabel').first().prop('label')).toEqual('Foo');
	});

	it('should map onValueChange fn to onChange fn', async () => {

		const cb = jest.fn();
		const component = mount(
			<BlueBaseApp plugins={[Plugin]}>
				<Checkbox label="Foo" onValueChange={cb} />
			</BlueBaseApp>
		);

		await waitForElement(component, Checkbox);

		const checkbox = component.find('Checkbox').first();
		const onChange = checkbox.prop('onChange') as any;

		onChange({ target: { value: checkbox.prop('value') } }, true);

		// expect(component).toMatchSnapshot();
		expect(cb).toBeCalledTimes(1);
		expect(cb).toBeCalledWith(undefined, true);
	});

	it('should map onValueChange fn to onChange fn with value', async () => {

		const cb = jest.fn();
		const component = mount(
			<BlueBaseApp plugins={[Plugin]}>
			<Checkbox label="Foo" value="foo" onValueChange={cb} />
			</BlueBaseApp>
		);

		await waitForElement(component, Checkbox);

		const checkbox = component.find('Checkbox').first();
		const onChange = checkbox.prop('onChange') as any;

		onChange({ target: { value: checkbox.prop('value') } }, true);

		// expect(component).toMatchSnapshot();
		expect(cb).toBeCalledTimes(1);
		expect(cb).toBeCalledWith('foo', true);
	});

	it('should pass onChange as is if available', async () => {

		const cb = jest.fn();

		const CHECKBOX = Checkbox as any;
		const component = mount(
			<BlueBaseApp plugins={[Plugin]}>
			<CHECKBOX label="Foo" onChange={cb} />
			</BlueBaseApp>
		);

		await waitForElement(component, CHECKBOX);

		const onChange = component.find('Checkbox').first().prop('onChange') as any;

		onChange('foo', true);

		// expect(component).toMatchSnapshot();
		expect(cb).toBeCalledTimes(1);
		expect(cb).toBeCalledWith('foo', true);
	});

});



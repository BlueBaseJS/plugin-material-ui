import { BlueBaseApp } from '@bluebase/core';
import { mount } from 'enzyme';
import { waitForElement } from 'enzyme-async-helpers';
import React from 'react';

import Plugin from '../../../index';
import { Radio } from '../Radio';

describe('Radio', () => {
	it('should set the checked to true when checked is true', async () => {
		const component = mount(
			<BlueBaseApp plugins={[Plugin]}>
				<Radio checked />
			</BlueBaseApp>
		);
		await waitForElement(component, Radio);

		// expect(component).toMatchSnapshot();
		expect(component.find(Radio).first().prop('checked')).toEqual(true);
	});

	it('should set the checked to false when checked is false', async () => {
		const component = mount(
			<BlueBaseApp plugins={[Plugin]}>
				<Radio checked={false} />
			</BlueBaseApp>
		);
		await waitForElement(component, Radio);

		expect(component.find(Radio).first().prop('checked')).toEqual(false);
	});

	it('should pass the color as is when set to "primary"', async () => {
		const component = mount(
			<BlueBaseApp plugins={[Plugin]}>
				<Radio color="primary" />
			</BlueBaseApp>
		);
		await waitForElement(component, Radio);

		expect(component.find(Radio).first().prop('color')).toEqual('primary');
	});

	it('should pass the color as is when set to "secondary"', async () => {
		const component = mount(
			<BlueBaseApp plugins={[Plugin]}>
				<Radio color="secondary" />
			</BlueBaseApp>
		);
		await waitForElement(component, Radio);

		expect(component.find(Radio).first().prop('color')).toEqual('secondary');
	});

	it('should pass the color as is when set to "default"', async () => {
		const component = mount(
			<BlueBaseApp plugins={[Plugin]}>
				<Radio color="default" />
			</BlueBaseApp>
		);
		await waitForElement(component, Radio);

		expect(component.find(Radio).first().prop('color')).toEqual('default');
	});

	it('should set the color prop to undefined and create classed for custom colors', async () => {
		const component = mount(
			<BlueBaseApp plugins={[Plugin]}>
				<Radio color="red" />
			</BlueBaseApp>
		);
		await waitForElement(component, Radio);

		expect(component.find('WithStyles(ForwardRef(Radio))').first().prop('classes')).toBeTruthy();
		expect(component.find('WithStyles(ForwardRef(Radio))').first().prop('color')).toEqual(
			'default'
		);
	});

	it('should set the label component', async () => {
		const component = mount(
			<BlueBaseApp plugins={[Plugin]}>
				<Radio label="Foo" />
			</BlueBaseApp>
		);
		await waitForElement(component, Radio);

		// expect(component.find(Radio)).toMatchSnapshot();
		expect(component.find('ForwardRef(FormControlLabel)').length).toBeGreaterThan(0);
		expect(component.find('ForwardRef(FormControlLabel)').first().prop('label')).toEqual('Foo');
	});

	it('should map onValueChange fn to onChange fn', async () => {
		const cb = jest.fn();
		const component = mount(
			<BlueBaseApp plugins={[Plugin]}>
				<Radio label="Foo" onValueChange={cb} />
			</BlueBaseApp>
		);
		await waitForElement(component, Radio);

		const radio = component.find('ForwardRef(Radio)').first();
		const onChange = radio.prop('onChange') as any;

		onChange({ target: { value: radio.prop('value') } }, true);

		// expect(component).toMatchSnapshot();
		expect(cb).toBeCalledTimes(1);
		expect(cb).toBeCalledWith(undefined, true);
	});

	it('should map onValueChange fn to onChange fn with value', async () => {
		const cb = jest.fn();
		const component = mount(
			<BlueBaseApp plugins={[Plugin]}>
				<Radio label="Foo" value="foo" onValueChange={cb} />
			</BlueBaseApp>
		);
		await waitForElement(component, Radio);
		const radio = component.find('ForwardRef(Radio)').first();
		const onChange = radio.prop('onChange') as any;

		onChange({ target: { value: radio.prop('value') } }, true);

		// expect(component).toMatchSnapshot();
		expect(cb).toBeCalledTimes(1);
		expect(cb).toBeCalledWith('foo', true);
	});

	it('should pass onChange as is if available', async () => {
		const cb = jest.fn();

		const RADIO = Radio as any;

		const component = mount(
			<BlueBaseApp plugins={[Plugin]}>
				<RADIO label="Foo" onChange={cb} />
			</BlueBaseApp>
		);
		await waitForElement(component, RADIO);

		const onChange = component.find(RADIO).first().prop('onChange') as any;

		onChange('foo', true);

		// expect(component).toMatchSnapshot();
		expect(cb).toBeCalledTimes(1);
		expect(cb).toBeCalledWith('foo', true);
	});
});

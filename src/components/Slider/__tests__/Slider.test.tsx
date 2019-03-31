import React from 'react';
import { Slider } from '../Slider';
import { mount } from 'enzyme';

describe('Slider', () => {

	it('should map min and max props', () => {
		const component = mount(
			<Slider minimumValue={10} maximumValue={50} value={25} />
		);

		// expect(component).toMatchSnapshot();
		expect(component.find('Slider').first().prop('min')).toEqual(10);
		expect(component.find('Slider').first().prop('max')).toEqual(50);
		expect(component.find('Slider').first().prop('value')).toEqual(25);
	});

	it('should map onValueChange fn to onChange fn', () => {

		const cb = jest.fn();
		const component = mount(
			<Slider onValueChange={cb} />
		);

		const sw = component.find('Slider').first();
		const onChange = sw.prop('onChange') as any;

		onChange({ target: { value: sw.prop('value') } }, 32);

		// expect(component).toMatchSnapshot();
		expect(cb).toBeCalledTimes(1);
		expect(cb).toBeCalledWith(32);
	});

	it('should map onValueChange fn to onChange fn with value', () => {

		const cb = jest.fn();
		const component = mount(
			<Slider onValueChange={cb} />
		);

		const sw = component.find('Slider').first();
		const onChange = sw.prop('onChange') as any;

		onChange({ target: { value: sw.prop('value') } }, 43);

		// expect(component).toMatchSnapshot();
		expect(cb).toBeCalledTimes(1);
		expect(cb).toBeCalledWith(43);
	});

	it('should pass onChange as is if available', () => {

		const cb = jest.fn();

		const SLIDER = Slider as any;

		const component = mount(
			<SLIDER onChange={cb} />
		);

		const onChange = component.find('Slider').first().prop('onChange') as any;

		onChange('foo', 54);

		// expect(component).toMatchSnapshot();
		expect(cb).toBeCalledTimes(1);
		expect(cb).toBeCalledWith('foo', 54);
	});

});


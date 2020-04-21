import React from 'react';
import { Slider } from '../Slider';
import { mount } from 'enzyme';

describe('Slider', () => {
	it('should map min and max props', () => {
		const component = mount(<Slider minimumValue={10} maximumValue={50} value={25} />);

		expect(component.find('Slider').first().prop('min')).toEqual(10);
		expect(component.find('Slider').first().prop('max')).toEqual(50);
		expect(component.find('Slider').first().prop('value')).toEqual(25);
	});

	it('should map onValueChange fn to onChange fn', () => {
		const cb = jest.fn();
		const component = mount(<Slider onValueChange={cb} />);

		const sw = component.find('Slider').first();
		const onChange = sw.prop('onChange') as any;

		onChange({ target: { value: sw.prop('value') } }, 32);

		// expect(component).toMatchSnapshot();
		expect(cb).toBeCalledTimes(1);
		expect(cb).toBeCalledWith(32);
	});

	it('should map onValueChange fn to onChange fn with value', () => {
		const cb = jest.fn();
		const component = mount(<Slider onValueChange={cb} />);

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

		const component = mount(<SLIDER onChange={cb} />);

		const onChange = component.find('Slider').first().prop('onChange') as any;

		onChange('foo', 54);

		// expect(component).toMatchSnapshot();
		expect(cb).toBeCalledTimes(1);
		expect(cb).toBeCalledWith('foo', 54);
	});

	it('should display label & helperText', () => {
		const component = mount(<Slider label="FooBar" helperText="description" />);

		// expect(component).toMatchSnapshot();
		const label = component.find('FormLabel');
		const helperText = component.find('FormHelperText');

		expect(label.getElements()).toHaveLength(1);
		expect(label.text()).toBe('FooBar');

		expect(helperText.getElements()).toHaveLength(1);
		expect(helperText.text()).toBe('description');
	});

	it('should display label & value on top when showValue is true', () => {
		const component = mount(<Slider label="FooBar" showValue value={25} />);

		// expect(component).toMatchSnapshot();
		const label = component.find('[data-testid="value-on-top"] [data-testid="label"]').last();
		const value = component.find('[data-testid="value-on-top"] [data-testid="value"]').last();

		expect(label.text()).toBe('FooBar');
		expect(value.text()).toBe('25');
	});

	it('should display value on right when showValue is true and there is no label', () => {
		const component = mount(<Slider showValue value={25} />);

		// expect(component).toMatchSnapshot();
		const value = component.find('[data-testid="value-on-right"] [data-testid="value"]').last();

		expect(value.text()).toBe('25');
	});

	it('should NOT display label or helperText', () => {
		const component = mount(<Slider />);

		// expect(component).toMatchSnapshot();
		const label = component.find('FormLabel');
		const helperText = component.find('FormHelperText');

		expect(label.getElements()).toHaveLength(0);

		expect(helperText.getElements()).toHaveLength(0);
	});
});

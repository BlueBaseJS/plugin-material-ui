import { BlueBaseApp } from '@bluebase/core';
import Plugin from '../../../index';
import { Radio } from '../../Radio';
import { RadioGroup } from '../RadioGroup';
import React from 'react';
import { mount } from 'enzyme';
import { waitForElement } from 'enzyme-async-helpers';

describe('RadioGroup', () => {
	it('should map onValueChange fn to onChange fn', async () => {
		const cb = jest.fn();
		const component = mount(
			<BlueBaseApp plugins={[Plugin]}>
				<RadioGroup onValueChange={cb}>
					<Radio label="Option A" value="option-a" />
					<Radio label="Option B" value="option-b" />
					<Radio label="Option C" value="option-c" />
				</RadioGroup>
			</BlueBaseApp>
		);
		await waitForElement(component, RadioGroup);

		const radio = component.find('ForwardRef(Radio)').first();

		// expect(component.find(RadioGroup)).toMatchSnapshot();
		const onChange = radio.prop('onChange') as any;

		debugger;
		onChange({ target: { value: radio.prop('value') } }, true);

		expect(cb).toBeCalledTimes(1);
		expect(cb).toBeCalledWith('option-a');
	});

	it('should pass onChange as is if available', async () => {
		const cb = jest.fn();

		const RG = RadioGroup as any;

		const component = mount(
			<BlueBaseApp plugins={[Plugin]}>
				<RG onChange={cb}>
					<Radio label="Option A" value="option-a" />
					<Radio label="Option B" value="option-b" />
					<Radio label="Option C" value="option-c" />
				</RG>
			</BlueBaseApp>
		);
		await waitForElement(component, RadioGroup);

		const onChange = component.find('RadioGroup').first().prop('onChange') as any;

		onChange('foo', true);

		// expect(component).toMatchSnapshot();
		expect(cb).toBeCalledTimes(1);
		expect(cb).toBeCalledWith('foo', true);
	});

	it('should display label & helperText', async () => {
		const component = mount(
			<BlueBaseApp plugins={[Plugin]}>
				<RadioGroup label="FooBar" helperText="description">
					<Radio label="Option A" value="option-a" />
					<Radio label="Option B" value="option-b" />
					<Radio label="Option C" value="option-c" />
				</RadioGroup>
			</BlueBaseApp>
		);
		await waitForElement(component, RadioGroup);

		// expect(component).toMatchSnapshot();
		const label = component.find('FormLabel');
		const helperText = component.find('FormHelperText');

		expect(label.getElements()).toHaveLength(1);
		expect(label.text()).toBe('FooBar');

		expect(helperText.getElements()).toHaveLength(1);
		expect(helperText.text()).toBe('description');
	});

	it('should NOT display label or helperText', async () => {
		const component = mount(
			<BlueBaseApp plugins={[Plugin]}>
				<RadioGroup>
					<Radio label="Option A" value="option-a" />
					<Radio label="Option B" value="option-b" />
					<Radio label="Option C" value="option-c" />
				</RadioGroup>
			</BlueBaseApp>
		);
		await waitForElement(component, RadioGroup);

		// expect(component).toMatchSnapshot();
		const label = component.find('FormLabel');
		const helperText = component.find('FormHelperText');

		expect(label.getElements()).toHaveLength(0);

		expect(helperText.getElements()).toHaveLength(0);
	});
});

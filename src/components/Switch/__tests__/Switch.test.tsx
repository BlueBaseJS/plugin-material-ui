import { BlueBaseApp } from '@bluebase/core';
import Plugin from '../../../index';
import React from 'react';
import { Switch } from '../Switch';
import { mount } from 'enzyme';
import { waitForElement } from 'enzyme-async-helpers';

describe('Switch', () => {
	it('should set the checked to true when checked is true', async () => {
		const component = mount(
			<BlueBaseApp plugins={[Plugin]}>
				<Switch checked />
			</BlueBaseApp>
		);
		await waitForElement(component, Switch);

		// expect(component).toMatchSnapshot();
		expect(
			component
				.find('Switch')
				.first()
				.prop('checked')
		).toEqual(true);
	});

	// it('should have different colors in dark mode', () => {
	// 	const theme = createMuiTheme({ palette: { type: 'dark' } });

	// 	const classes = styles({ color: 'red' }, theme);

	// 	expect((classes as any).disabled['& + $bar'].opacity).toBe(0.1);
	// });

	it('should set the checked to false when checked is false', async () => {
		const component = mount(
			<BlueBaseApp plugins={[Plugin]}>
				<Switch checked={false} />
			</BlueBaseApp>
		);
		await waitForElement(component, Switch);

		expect(
			component
				.find('Switch')
				.first()
				.prop('checked')
		).toEqual(false);
	});

	it('should pass the color as is when set to "primary"', async () => {
		const component = mount(
			<BlueBaseApp plugins={[Plugin]}>
				<Switch color="primary" />
			</BlueBaseApp>
		);
		await waitForElement(component, Switch);

		expect(
			component
				.find('Switch')
				.first()
				.prop('color')
		).toEqual('default');
	});

	it('should pass the color as is when set to "secondary"', async () => {
		const component = mount(
			<BlueBaseApp plugins={[Plugin]}>
				<Switch color="secondary" />
			</BlueBaseApp>
		);
		await waitForElement(component, Switch);

		expect(
			component
				.find('Switch')
				.first()
				.prop('color')
		).toEqual('default');
	});

	it('should pass the color as is when set to "default"', async () => {
		const component = mount(
			<BlueBaseApp plugins={[Plugin]}>
				<Switch color="default" />
			</BlueBaseApp>
		);
		await waitForElement(component, Switch);

		expect(
			component
				.find('Switch')
				.first()
				.prop('color')
		).toEqual('default');
	});

	it('should set the color prop to undefined and create classes for custom colors', async () => {
		const component = mount(
			<BlueBaseApp plugins={[Plugin]}>
				<Switch color="red" />
			</BlueBaseApp>
		);
		await waitForElement(component, Switch);

		expect(
			component
				.find('WithStyles(Component)')
				.first()
				.prop('color')
		).toEqual('red');
	});

	it('should set the label component', async () => {
		const component = mount(
			<BlueBaseApp plugins={[Plugin]}>
				<Switch label="Foo" />
			</BlueBaseApp>
		);
		await waitForElement(component, Switch);
		// expect(component).toMatchSnapshot();
		expect(component.find('FormControlLabel').length).toBeGreaterThan(0);
		expect(
			component
				.find('FormControlLabel')
				.first()
				.prop('label')
		).toEqual('Foo');
	});

	it('should map onValueChange fn to onChange fn', async () => {
		const cb = jest.fn();
		const component = mount(
			<BlueBaseApp plugins={[Plugin]}>
				<Switch label="Foo" onValueChange={cb} />
			</BlueBaseApp>
		);
		await waitForElement(component, Switch);
		const sw = component.find('Switch').first();
		const onChange = sw.prop('onChange') as any;

		onChange({ target: { value: sw.prop('value') } }, true);

		// expect(component).toMatchSnapshot();
		expect(cb).toBeCalledTimes(1);
		expect(cb).toBeCalledWith(undefined, true);
	});

	it('should map onValueChange fn to onChange fn with value', async () => {
		const cb = jest.fn();
		const component = mount(
			<BlueBaseApp plugins={[Plugin]}>
				<Switch label="Foo" value="foo" onValueChange={cb} />
			</BlueBaseApp>
		);
		await waitForElement(component, Switch);

		const sw = component.find('Switch').first();
		const onChange = sw.prop('onChange') as any;

		onChange({ target: { value: sw.prop('value') } }, true);

		// expect(component).toMatchSnapshot();
		expect(cb).toBeCalledTimes(1);
		expect(cb).toBeCalledWith('foo', true);
	});

	it('should pass onChange as is if available', async () => {
		const cb = jest.fn();

		const SWITCH = Switch as any;

		const component = mount(
			<BlueBaseApp plugins={[Plugin]}>
				<SWITCH label="Foo" onChange={cb} />
			</BlueBaseApp>
		);
		await waitForElement(component, SWITCH);
		const onChange = component
			.find('Switch')
			.first()
			.prop('onChange') as any;

		onChange('foo', true);

		// expect(component).toMatchSnapshot();
		expect(cb).toBeCalledTimes(1);
		expect(cb).toBeCalledWith('foo', true);
	});
});

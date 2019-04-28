import React from 'react';
import { Switch } from '../Switch';
import { createMuiTheme } from '@material-ui/core/styles';
import { mount } from 'enzyme';
import { styles } from '../styles';

describe('Switch', () => {

	it('should set the checked to true when checked is true', () => {
		const component = mount(
			<Switch checked />
		);

		// expect(component).toMatchSnapshot();
		expect(component.find('Switch').first().prop('checked')).toEqual(true);
	});

	it('should have different colors in dark mode', () => {

		const theme = createMuiTheme({ palette: { type: 'dark' } });

		const classes = styles({ color: 'red' }, theme);

		expect((classes as any).disabled['& + $bar'].opacity).toBe(0.1);
	});

	it('should set the checked to false when checked is false', () => {
		const component = mount(
			<Switch checked={false} />
		);

		expect(component.find('Switch').first().prop('checked')).toEqual(false);
	});

	it('should pass the color as is when set to "primary"', () => {
		const component = mount(
			<Switch color="primary" />
		);

		expect(component.find('Switch').first().prop('color')).toEqual('primary');
	});

	it('should pass the color as is when set to "secondary"', () => {
		const component = mount(
			<Switch color="secondary" />
		);

		expect(component.find('Switch').first().prop('color')).toEqual('secondary');
	});

	it('should pass the color as is when set to "default"', () => {
		const component = mount(
			<Switch color="default" />
		);

		expect(component.find('Switch').first().prop('color')).toEqual('default');
	});

	it('should set the color prop to undefined and create classes for custom colors', () => {
		const component = mount(
			<Switch color="red" />
		);
		// expect(component).toMatchSnapshot();
		expect(component.find('WithStyles(Switch)').first().prop('classes')).toBeTruthy();
		expect(component.find('WithStyles(Switch)').first().prop('color')).toEqual('red');
	});

	it('should set the label component', () => {
		const component = mount(
			<Switch label="Foo" />
		);
		// expect(component).toMatchSnapshot();
		expect(component.find('FormControlLabel').length).toBeGreaterThan(0);
		expect(component.find('FormControlLabel').first().prop('label')).toEqual('Foo');
	});

	it('should map onValueChange fn to onChange fn', () => {

		const cb = jest.fn();
		const component = mount(
			<Switch label="Foo" onValueChange={cb} />
		);

		const sw = component.find('Switch').first();
		const onChange = sw.prop('onChange') as any;

		onChange({ target: { value: sw.prop('value') } }, true);

		// expect(component).toMatchSnapshot();
		expect(cb).toBeCalledTimes(1);
		expect(cb).toBeCalledWith(undefined, true);
	});

	it('should map onValueChange fn to onChange fn with value', () => {

		const cb = jest.fn();
		const component = mount(
			<Switch label="Foo" value="foo" onValueChange={cb} />
		);

		const sw = component.find('Switch').first();
		const onChange = sw.prop('onChange') as any;

		onChange({ target: { value: sw.prop('value') } }, true);

		// expect(component).toMatchSnapshot();
		expect(cb).toBeCalledTimes(1);
		expect(cb).toBeCalledWith('foo', true);
	});

	it('should pass onChange as is if available', () => {

		const cb = jest.fn();

		const SWITCH = Switch as any;

		const component = mount(
			<SWITCH label="Foo" onChange={cb} />
		);

		const onChange = component.find('Switch').first().prop('onChange') as any;

		onChange('foo', true);

		// expect(component).toMatchSnapshot();
		expect(cb).toBeCalledTimes(1);
		expect(cb).toBeCalledWith('foo', true);
	});

});



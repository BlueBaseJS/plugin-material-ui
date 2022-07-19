import { shallow } from 'enzyme';
import React from 'react';

import { TextInput } from '../TextInput';

describe('TextInput', () => {

	test('TextInput should not call any onChange callbacks, when none are provided', () => {

		const onChange = jest.fn();
		const onChangeText = jest.fn();

		const component = shallow(
			<TextInput />
		);

		component.props().onChange();

		expect(onChange).toBeCalledTimes(0);
		expect(onChangeText).toBeCalledTimes(0);
	});

	test('TextInput should call onChange but not onChangeText', () => {

		const onChange = jest.fn();
		const onChangeText = jest.fn();

		const component = shallow(
			<TextInput onChange={onChange} />
		);

		component.props().onChange();

		expect(onChange).toBeCalledTimes(1);
		expect(onChangeText).toBeCalledTimes(0);
	});

	test('TextInput should call onChange but not onChangeText, there is no event', () => {

		const onChange = jest.fn();
		const onChangeText = jest.fn();

		const component = shallow(
			<TextInput onChange={onChange} onChangeText={onChangeText} />
		);

		component.props().onChange();

		expect(onChange).toBeCalledTimes(1);
		expect(onChangeText).toBeCalledTimes(0);
	});

	test('TextInput should call onChange but not onChangeText, there is no event.target', () => {

		const onChange = jest.fn();
		const onChangeText = jest.fn();

		const component = shallow(
			<TextInput onChange={onChange} onChangeText={onChangeText} />
		);

		component.props().onChange({ foo: 'bar' });

		expect(onChange).toBeCalledTimes(1);
		expect(onChangeText).toBeCalledTimes(0);
	});

	test('TextInput should call onChangeText', () => {

		const onChange = jest.fn();
		const onChangeText = jest.fn();

		const component = shallow(
			<TextInput onChangeText={onChangeText} />
		);

		component.props().onChange({ target: { value: 'Wow' } });

		expect(onChange).toBeCalledTimes(0);
		expect(onChangeText).toBeCalledTimes(1);
		expect(onChangeText).toBeCalledWith('Wow');
	});

	describe('autoCorrect prop', () => {

		it('should be "undefined" by default', () => {
			const component = shallow(
				<TextInput />
			);

			expect(component.props().autoCorrect).toBe(undefined);
			// expect(component).toMatchSnapshot();
		});

		it('should be "undefined" when autoCorrect prop is true', () => {
			const component = shallow(
				<TextInput autoCorrect />
			);

			expect(component.props().autoCorrect).toBe(undefined);
		});

		it('should be "undefined" when autoCorrect prop is false', () => {
			const component = shallow(
				<TextInput autoCorrect={false} />
			);

			expect(component.props().autoCorrect).toBe(undefined);
		});

	});

	describe('disabled prop', () => {

		it('should set disabled to "false" by default', () => {
			const component = shallow(
				<TextInput />
			);

			expect(component.props().disabled).toBe(false);
			// expect(component).toMatchSnapshot();
		});

		it('should set disabled to "false" when editable prop is true', () => {
			const component = shallow(
				<TextInput editable />
			);

			expect(component.props().disabled).toBe(false);
		});

		it('should set disabled to "true" when editable prop is false', () => {
			const component = shallow(
				<TextInput editable={false} />
			);

			expect(component.props().disabled).toBe(true);
		});

		it('should set disabled to "true" when disabled prop is true', () => {
			const component = shallow(
				<TextInput disabled editable />
			);

			expect(component.props().disabled).toBe(true);
		});

		it('should set disabled to "false" when disabled prop is false', () => {
			const component = shallow(
				<TextInput disabled={false} editable={false} />
			);

			expect(component.props().disabled).toBe(false);
		});

	});

	describe('spellCheck prop', () => {

		it('should set spellCheck to "undefined" by default', () => {
			const component = shallow(
				<TextInput />
			);

			expect(component.props().spellCheck).toBe(undefined);
			// expect(component).toMatchSnapshot();
		});

		it('should be "undefined" when autoCorrect prop is true', () => {
			const component = shallow(
				<TextInput autoCorrect />
			);

			expect(component.props().spellCheck).toBe(undefined);
		});

		it('should be "undefined" when autoCorrect prop is false', () => {
			const component = shallow(
				<TextInput autoCorrect={false} />
			);

			expect(component.props().spellCheck).toBe(undefined);
		});

		it('should be "undefined" when spellCheck prop is true', () => {
			const component = shallow(
				<TextInput spellCheck autoCorrect={false} />
			);

			expect(component.props().spellCheck).toBe(undefined);
		});

		it('should be "undefined" when spellCheck prop is false', () => {
			const component = shallow(
				<TextInput spellCheck={false} autoCorrect />
			);

			expect(component.props().spellCheck).toBe(undefined);
		});

	});

	describe('type prop', () => {

		it('should set type to "text" by default', () => {
			const component = shallow(
				<TextInput />
			);

			expect(component.props().type).toBe('text');
			// expect(component).toMatchSnapshot();
		});

		it('should set type to as is', () => {
			const component = shallow(
				<TextInput type="bar" />
			);

			expect(component.props().type).toBe('bar');
		});

		it('should set type to "text" when an unknown keyboardType prop is set', () => {
			const component = shallow(
				<TextInput keyboardType={'foo' as any} />
			);

			expect(component.props().type).toBe('text');
		});

		it('should set type to "email" when keyboardType prop is "email-address"', () => {
			const component = shallow(
				<TextInput keyboardType="email-address" />
			);

			expect(component.props().type).toBe('email');
		});

		it('should set type to "number" when keyboardType prop is "number-pad"', () => {
			const component = shallow(
				<TextInput keyboardType="number-pad" />
			);

			expect(component.props().type).toBe('number');
		});

		it('should set type to "number" when keyboardType prop is "numeric"', () => {
			const component = shallow(
				<TextInput keyboardType="numeric" />
			);

			expect(component.props().type).toBe('number');
		});

		it('should set type to "tel" when keyboardType prop is "phone-pad"', () => {
			const component = shallow(
				<TextInput keyboardType="phone-pad" />
			);

			expect(component.props().type).toBe('tel');
		});

		it('should set type to "search" when keyboardType prop is "search"', () => {
			const component = shallow(
				<TextInput keyboardType={'search' as any} />
			);

			expect(component.props().type).toBe('search');
		});

		it('should set type to "search" when keyboardType prop is "web-search"', () => {
			const component = shallow(
				<TextInput keyboardType="web-search" />
			);

			expect(component.props().type).toBe('search');
		});

		it('should set type to "url" when keyboardType prop is "url"', () => {
			const component = shallow(
				<TextInput keyboardType="url" />
			);

			expect(component.props().type).toBe('url');
		});

		it('should set type to "password" when secureTextEntry prop is true', () => {
			const component = shallow(
				<TextInput secureTextEntry keyboardType="url" />
			);

			expect(component.props().type).toBe('password');
		});

	});

});

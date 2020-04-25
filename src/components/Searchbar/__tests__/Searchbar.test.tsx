import { BlueBaseApp } from '@bluebase/core';
import { Icon } from '@bluebase/components';
import Plugin from '../../../index';
import React from 'react';
import { Searchbar } from '../index';
import { mount } from 'enzyme';
import { waitForElement } from 'enzyme-async-helpers';

describe('Searchbar', () => {
	it('should render Searchbar', async () => {
		const wrapper = mount(
			<BlueBaseApp plugins={[Plugin]}>
				<Searchbar placeholder="Search" />
			</BlueBaseApp>
		);
		await waitForElement(wrapper, Searchbar);
		expect(wrapper.find('TextInput').first().prop('placeholder')).toBe('Search');

		wrapper.unmount();
	});

	it('should render Searchbar with value', async () => {
		const wrapper = mount(
			<BlueBaseApp plugins={[Plugin]}>
				<Searchbar placeholder="Search" value="Something" />
			</BlueBaseApp>
		);
		await waitForElement(wrapper, Searchbar);
		expect(wrapper.find('TextInput').first().prop('value')).toBe('Something');

		const onClearPress: any = wrapper.find('IconButton').first().prop('onPress');
		onClearPress();

		wrapper.unmount();
	});

	it('should render reset value when clear button is pressed', async () => {
		const onChangeText = jest.fn();

		const wrapper = mount(
			<BlueBaseApp plugins={[Plugin]}>
				<Searchbar placeholder="Search" value="Something" onChangeText={onChangeText} />
			</BlueBaseApp>
		);
		await waitForElement(wrapper, Searchbar);
		expect(wrapper.find('TextInput').first().prop('value')).toBe('Something');

		const onClearPress: any = wrapper.find('IconButton').first().prop('onPress');
		onClearPress();

		expect(onChangeText).toHaveBeenCalledTimes(1);
		expect(onChangeText).toHaveBeenCalledWith('');

		wrapper.unmount();
	});

	it('should render Searchbar with custom search icon', async () => {
		const wrapper = mount(
			<BlueBaseApp plugins={[Plugin]}>
				<Searchbar placeholder="Search" value="Something" icon={{ name: 'custom' }} />
			</BlueBaseApp>
		);
		await waitForElement(wrapper, Searchbar);
		expect(wrapper.find(Icon).last().prop('name')).toBe('custom');

		wrapper.unmount();
	});

	it('should render Searchbar with custom clear icon', async () => {
		const wrapper = mount(
			<BlueBaseApp plugins={[Plugin]}>
				<Searchbar placeholder="Search" value="Something" clearIcon={{ name: 'custom' }} />
			</BlueBaseApp>
		);
		await waitForElement(wrapper, Searchbar);
		expect(wrapper.find(Icon).first().prop('name')).toBe('custom');

		wrapper.unmount();
	});

	it('should render Searchbar custom iconColor', async () => {
		const wrapper = mount(
			<BlueBaseApp plugins={[Plugin]}>
				<Searchbar placeholder="Search" value="Something" iconColor="red" />
			</BlueBaseApp>
		);
		await waitForElement(wrapper, Searchbar);
		expect(wrapper.find(Icon).first().prop('color')).toBe('red');

		wrapper.unmount();
	});
});

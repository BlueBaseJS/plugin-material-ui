import { BlueBaseApp } from '@bluebase/core';
import { BottomNavigationAction } from '../BottomNavigationAction';
import React from 'react';
import { mount } from 'enzyme';
import { waitForElement } from 'enzyme-async-helpers';

describe('BottomNavigationAction', () => {
	it('should render a DynamicIcon when icon prop is given', async () => {
		const component = mount(
			<BlueBaseApp>
				<BottomNavigationAction
					icon={{ type: 'image', size: 20, source: { uri: 'https://placeimg.com/100/100/any' } }}
				/>
			</BlueBaseApp>
		);

		await waitForElement(component as any, BottomNavigationAction);

		// expect(component).toMatchSnapshot();
		expect(
			component
				.find('BottomNavigationAction DynamicIcon')
				.first()
				.prop('type')
		).toBe('image');
		expect(
			component
				.find('BottomNavigationAction DynamicIcon')
				.first()
				.prop('size')
		).toEqual(20);
		expect(
			component
				.find('BottomNavigationAction DynamicIcon')
				.first()
				.prop('source')
		).toMatchObject({
			uri: 'https://placeimg.com/100/100/any',
		});
	});

	it('should render a DynamicIcon when icon prop is given', async () => {
		const component = mount(
			<BlueBaseApp>
				<BottomNavigationAction
					icon={{ type: 'image', source: { uri: 'https://placeimg.com/100/100/any' } }}
				/>
			</BlueBaseApp>
		);

		await waitForElement(component as any, BottomNavigationAction);

		// expect(component).toMatchSnapshot();
		expect(
			component
				.find('BottomNavigationAction DynamicIcon')
				.first()
				.prop('type')
		).toBe('image');
		expect(
			component
				.find('BottomNavigationAction DynamicIcon')
				.first()
				.prop('size')
		).toEqual(24);
		expect(
			component
				.find('BottomNavigationAction DynamicIcon')
				.first()
				.prop('source')
		).toMatchObject({
			uri: 'https://placeimg.com/100/100/any',
		});
	});

	it('should not render a DynamicIcon when icon prop is not given', async () => {
		const component = mount(
			<BlueBaseApp>
				<BottomNavigationAction label="Item" />
			</BlueBaseApp>
		);

		await waitForElement(component as any, BottomNavigationAction);

		// expect(component).toMatchSnapshot();
		expect(component.find('BottomNavigationAction DynamicIcon')).toHaveLength(0);
	});
});

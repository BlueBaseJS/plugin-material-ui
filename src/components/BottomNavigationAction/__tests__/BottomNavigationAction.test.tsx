import { Icon } from '@bluebase/components';
import { BlueBaseApp } from '@bluebase/core';
import { mount } from 'enzyme';
import { waitForElement } from 'enzyme-async-helpers';
import React from 'react';

import { BottomNavigationAction } from '../BottomNavigationAction';

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

		// expect(component.find(BottomNavigationAction)).toMatchSnapshot();
		expect(component.find('DynamicIcon').first().prop('type')).toBe('image');
		expect(component.find('DynamicIcon').first().prop('size')).toEqual(20);
		expect(component.find('DynamicIcon').first().prop('source')).toMatchObject({
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
	it('should render a DynamicIcon when icon prop is given', async () => {
		const component = mount(
			<BlueBaseApp>
				<BottomNavigationAction icon={<Icon name="dummy" />} />
			</BlueBaseApp>
		);

		await waitForElement(component as any, BottomNavigationAction);
	});
});

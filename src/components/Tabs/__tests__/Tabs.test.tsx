import { BlueBaseApp } from '@bluebase/core';
import React from 'react';
import { Tabs } from '../';
import { mount } from 'enzyme';
import { waitForElement } from 'enzyme-async-helpers';

describe('Tabs', () => {
	it('should render Tabs with value', async () => {
		const component = mount(
			<BlueBaseApp>
				<Tabs value={0} />
			</BlueBaseApp>
		);

		await waitForElement(component as any, Tabs);

		expect(
			component
				.find('Tabs')
				.first()
				.prop('value')
		).toBe(0);
	});
});

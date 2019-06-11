import { BlueBaseApp } from '@bluebase/core';
import React from 'react';
import { Tab } from '../Tab';
import { mount } from 'enzyme';
import { waitForElement } from 'enzyme-async-helpers';

describe('Tab', () => {
	it('should render an Icon when icon prop is given', async () => {
		const component = mount(
			<BlueBaseApp>
				<Tab icon="delete" />
			</BlueBaseApp>
		);

		await waitForElement(component as any, Tab);

		expect(
			component
				.find('Tab Icon')
				.first()
				.prop('name')
		).toBe('delete');
	});

	it('should not render an Icon when icon prop is not given', async () => {
		const component = mount(
			<BlueBaseApp>
				<Tab label="Item" />
			</BlueBaseApp>
		);

		await waitForElement(component as any, Tab);

		expect(
			component
				.find('Tab')
				.last()
				.prop('label')
		).toBe('Item');
		expect(component.find('Tab Icon')).toHaveLength(0);
	});
});

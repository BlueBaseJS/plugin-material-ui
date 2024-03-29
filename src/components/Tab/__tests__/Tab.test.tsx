import { BlueBaseApp } from '@bluebase/core';
import { DynamicIcon } from '@bluebase/core/dist/components';
import { mount } from 'enzyme';
import { waitForElement } from 'enzyme-async-helpers';
import React from 'react';

import { Tab } from '../Tab';

describe('Tab', () => {
	it('should render an Icon when icon prop is given', async () => {
		const component = mount(
			<BlueBaseApp>
				<Tab icon={{ name: 'delete' }} />
			</BlueBaseApp>
		);

		await waitForElement(component as any, Tab);

		expect(
			component
				.find('Tab DynamicIcon')
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

	it('should render an Icon when icon element is given', async () => {
		const component: any = mount(
			<BlueBaseApp>
				<Tab label="Item" icon={<DynamicIcon type="icon" name="delete" />} />
			</BlueBaseApp>
		);

		await waitForElement(component as any, Tab);
		const icon = component
			.find('Tab')
			.last()
			.prop('icon');

		expect(icon).toBeDefined();
	});
});

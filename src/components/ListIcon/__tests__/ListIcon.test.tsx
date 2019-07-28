import { BlueBaseApp, getComponent } from '@bluebase/core';

import Plugin from '../../..';
import React from 'react';
import { mount } from 'enzyme';
import { waitForElement } from 'enzyme-async-helpers';

const ListIcon = getComponent('ListIcon');

describe('ListIcon', () => {
	test('should forward title prop as primary', async () => {
		const component = mount(
			<BlueBaseApp plugins={[Plugin]}>
				<ListIcon name="inbox" />
			</BlueBaseApp>
		);

		await waitForElement(component, ListIcon);

		expect(
			component
				.find('Icon')
				.first()
				.prop('name')
		).toBe('inbox');
	});

	test('should not crash if improted directly', async () => {
		const Component = require('../ListIcon').ListIcon;
		const component = mount(
			<BlueBaseApp plugins={[Plugin]}>
				<Component name="inbox" />
			</BlueBaseApp>
		);

		await waitForElement(component, Component);

		expect(
			component
				.find('Icon')
				.first()
				.prop('name')
		).toBe('inbox');
	});
});

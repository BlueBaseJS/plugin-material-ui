import { BlueBaseApp } from '@bluebase/core';
import { ListAvatar } from '../ListAvatar';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import Plugin from '../../..';
import React from 'react';
import { mount } from 'enzyme';
import { waitForElement } from 'enzyme-async-helpers';

describe('ListAvatar', () => {
	test('should render ListItemAvatar', async () => {
		const component = mount(
			<BlueBaseApp plugins={[Plugin]}>
				<ListAvatar type="icon" />
			</BlueBaseApp>
		);

		await waitForElement(component, ListAvatar);

		expect(
			component
				.find(ListItemAvatar)
				.exists()
		).toBe(true);
	});

});

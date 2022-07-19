import { BlueBaseApp } from '@bluebase/core';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import { mount } from 'enzyme';
import { waitForElement } from 'enzyme-async-helpers';
import React from 'react';

import Plugin from '../../..';
import { ListAvatar } from '../ListAvatar';

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

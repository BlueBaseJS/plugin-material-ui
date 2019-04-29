import { TableCell } from '../index';
import React from 'react';
import { BlueBaseApp } from '@bluebase/core';

import { Text } from 'react-native';
import { mount } from 'enzyme';
import { waitForElement } from 'enzyme-async-helpers';
import Plugin from '../../../index';

test('TableCell component with children text', async () => {
	const wrapper = mount(
		<BlueBaseApp plugins={[Plugin]}>
			<TableCell>
				<Text>TableCell test</Text>
			</TableCell>
		</BlueBaseApp>
	);
	await waitForElement(wrapper, TableCell);
	expect(wrapper.props().children).toBeDefined();
});

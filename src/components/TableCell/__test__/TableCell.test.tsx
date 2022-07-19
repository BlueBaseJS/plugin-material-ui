import { BlueBaseApp } from '@bluebase/core';
import { mount } from 'enzyme';
import { waitForElement } from 'enzyme-async-helpers';
import React from 'react';
import { Text } from 'react-native';

import Plugin from '../../../index';
import { TableCell } from '../index';

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

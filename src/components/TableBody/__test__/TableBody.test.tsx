import { BlueBaseApp } from '@bluebase/core';
import { mount } from 'enzyme';
import { waitForElement } from 'enzyme-async-helpers';
import React from 'react';
import { Text } from 'react-native';

import Plugin from '../../../index';
import { TableBody } from '../index';

test('TableBody component with children text', async () => {
	const wrapper = mount(
		<BlueBaseApp plugins={[Plugin]}>
			<TableBody>
				<Text>TableBody test</Text>
			</TableBody>
		</BlueBaseApp>
	);
	await waitForElement(wrapper, TableBody);
	expect(wrapper.props().children).toBeDefined();
});

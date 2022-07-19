import { BlueBaseApp } from '@bluebase/core';
import { mount } from 'enzyme';
import { waitForElement } from 'enzyme-async-helpers';
import React from 'react';
import { Text } from 'react-native';

import Plugin from '../../../index';
import { TableFooter } from '../index';

test('TableFooter component with children text', async () => {
	const wrapper = mount(
		<BlueBaseApp plugins={[Plugin]}>
			<TableFooter>
				<Text>TableFooter test</Text>
			</TableFooter>
		</BlueBaseApp>
	);
	await waitForElement(wrapper, TableFooter);
	expect(wrapper.props().children).toBeDefined();
});

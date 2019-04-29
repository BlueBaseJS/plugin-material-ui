import { TableFooter } from '../index';
import React from 'react';
import { BlueBaseApp } from '@bluebase/core';

import { Text } from 'react-native';
import { mount } from 'enzyme';
import { waitForElement } from 'enzyme-async-helpers';
import Plugin from '../../../index';

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

import { TablePagination } from '../index';
import React from 'react';
import { BlueBaseApp } from '@bluebase/core';

import { Text } from 'react-native';
import { mount } from 'enzyme';
import { waitForElement } from 'enzyme-async-helpers';
import Plugin from '../../../index';

test('TablePagination component with children text', async () => {
	const wrapper = mount(
		<BlueBaseApp plugins={[Plugin]}>
			<TablePagination count={1} page={2} numberOfPages={2} onPageChange={() => null}>
				<Text>TablePagination test</Text>
			</TablePagination>
		</BlueBaseApp>
	);
	await waitForElement(wrapper, TablePagination);
	expect(wrapper.props().children).toBeDefined();
});

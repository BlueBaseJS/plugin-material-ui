import { Table } from '../index';
import React from 'react';
import { BlueBaseApp } from '@bluebase/core';

import { Text } from 'react-native';
import { mount } from 'enzyme';
import { waitForElement } from 'enzyme-async-helpers';
import Plugin from '../../../index';

test('Table component with children text', async () => {
	const wrapper = mount(
		<BlueBaseApp plugins={[Plugin]}>
			<Table>
				<Text>Table test</Text>
			</Table>
		</BlueBaseApp>
	);
	await waitForElement(wrapper, Table);
	expect(wrapper.props().children).toBeDefined();
});

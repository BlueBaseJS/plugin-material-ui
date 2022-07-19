import { BlueBaseApp } from '@bluebase/core';
import { mount } from 'enzyme';
import { waitForElement } from 'enzyme-async-helpers';
import React from 'react';
import { Text } from 'react-native';

import Plugin from '../../../index';
import { Table } from '../index';

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

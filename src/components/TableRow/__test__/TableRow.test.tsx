import { TableRow } from '../index';
import React from 'react';
import { BlueBaseApp } from '@bluebase/core';

import { Text } from 'react-native';
import { mount } from 'enzyme';
import { waitForElement } from 'enzyme-async-helpers';
import Plugin from '../../../index';

test('TableRow component with children text', async () => {
	const wrapper = mount(
		<BlueBaseApp plugins={[Plugin]}>
			<TableRow>
				<Text>TableRow test</Text>
			</TableRow>
		</BlueBaseApp>
	);
	await waitForElement(wrapper, TableRow);
	expect(wrapper.props().children).toBeDefined();
});

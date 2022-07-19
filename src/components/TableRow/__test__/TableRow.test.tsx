import { BlueBaseApp } from '@bluebase/core';
import { mount } from 'enzyme';
import { waitForElement } from 'enzyme-async-helpers';
import React from 'react';
import { Text } from 'react-native';

import Plugin from '../../../index';
import { TableRow } from '../index';

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

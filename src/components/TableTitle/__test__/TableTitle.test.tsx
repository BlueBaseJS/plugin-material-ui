import { TableTitle } from '../index';
import React from 'react';
import { BlueBaseApp } from '@bluebase/core';

import { Text } from 'react-native';
import { mount } from 'enzyme';
import { waitForElement } from 'enzyme-async-helpers';
import Plugin from '../../../index';

test('TableTitle component with children text', async () => {
	const wrapper = mount(
		<BlueBaseApp plugins={[Plugin]}>
			<TableTitle>
				<Text>TableTitle test</Text>
			</TableTitle>
		</BlueBaseApp>
	);
	await waitForElement(wrapper, TableTitle);
	expect(wrapper.props().children).toBeDefined();
});

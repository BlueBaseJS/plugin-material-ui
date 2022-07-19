import { BlueBaseApp } from '@bluebase/core';
import { mount } from 'enzyme';
import { waitForElement } from 'enzyme-async-helpers';
import React from 'react';
import { Text } from 'react-native';

import Plugin from '../../../index';
import { TableHead } from '../index';

test('TableHeader component with children text', async () => {
	const wrapper = mount(
		<BlueBaseApp plugins={[Plugin]}>
			<TableHead>
				<Text>TableHeader test</Text>
			</TableHead>
		</BlueBaseApp>
	);
	await waitForElement(wrapper, TableHead);
	expect(wrapper.props().children).toBeDefined();
});

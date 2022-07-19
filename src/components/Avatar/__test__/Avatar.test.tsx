import { BlueBaseApp } from '@bluebase/core';
import { mount } from 'enzyme';
import { waitForElement } from 'enzyme-async-helpers';
import React from 'react';

import Plugin from '../../../index';
import { Avatar } from '../Avatar';

const path = 'https://via.placeholder.com/300/09f.png%20C/O%20https://placeholder.com/';

test('avatar component should return source Image', async () => {
	const wrapper = mount(
		<BlueBaseApp plugins={[Plugin]}>
			<Avatar type="image" image={{ uri: path }} />
		</BlueBaseApp>
	);

	await waitForElement(wrapper, Avatar);

	const sourceProp: any = wrapper.find(Avatar).find('BlueBaseImage').first().prop('source');
	expect(sourceProp.uri).toBe(path);
});

test('avatar component should return source Image', async () => {
	const wrapper = mount(
		<BlueBaseApp plugins={[Plugin]}>
			<Avatar type="image" image={path as any} />
		</BlueBaseApp>
	);

	await waitForElement(wrapper, Avatar);

	const sourceProp: any = wrapper.find(Avatar).find('BlueBaseImage').first().prop('source');
	expect(sourceProp).toBe(path);
});

test('avatar component should return type=icon', async () => {
	const wrapper = mount(
		<BlueBaseApp plugins={[Plugin]}>
			<Avatar type="icon" icon="inbox" variant="rounded" />
		</BlueBaseApp>
	);

	await waitForElement(wrapper, Avatar);

	const sourceProp: any = wrapper.find(Avatar).find('Icon').last().prop('name');
	expect(sourceProp).toBe('inbox');
});

test('avatar component should return source Image', async () => {
	const wrapper = mount(
		<BlueBaseApp plugins={[Plugin]}>
			<Avatar type="text" text="N" color="primary" variant="square" />
		</BlueBaseApp>
	);

	await waitForElement(wrapper, Avatar);

	const sourceProp: any = wrapper.find(Avatar).first().text();
	expect(sourceProp).toBe('N');
});

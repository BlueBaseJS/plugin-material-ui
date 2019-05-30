import { Avatar } from '../Avatar';
import { BlueBaseApp } from '@bluebase/core';
import Plugin from '../../../index';
import React from 'react';
import { mount } from 'enzyme';
import { waitForElement } from 'enzyme-async-helpers';

const path = 'https://via.placeholder.com/300/09f.png%20C/O%20https://placeholder.com/';

test('avatar component should  return  source Image', async () => {
	const wrapper = mount(
		<BlueBaseApp plugins={[Plugin]}>
			<Avatar type="image" image={{ uri: path }} />
		</BlueBaseApp>
	);

	await waitForElement(wrapper, Avatar);

	const sourceProp: any = wrapper
		.find('Avatar BlueBaseImage')
		.first()
		.prop('source');
	expect(sourceProp.uri).toBe(path);
});

test('avatar component should  return  source Image', async () => {
	const wrapper = mount(
		<BlueBaseApp plugins={[Plugin]}>
			<Avatar type="image" image={path as any} />
		</BlueBaseApp>
	);

	await waitForElement(wrapper, Avatar);

	const sourceProp: any = wrapper
		.find('Avatar BlueBaseImage')
		.first()
		.prop('source');
	expect(sourceProp).toBe(path);
});

test('avatar component should  return   type =icon', async () => {
	const wrapper = mount(
		<BlueBaseApp plugins={[Plugin]}>
			<Avatar type="icon" icon="inbox" />
		</BlueBaseApp>
	);

	await waitForElement(wrapper, Avatar);

	const sourceProp: any = wrapper
		.find('Avatar Icon')
		.last()
		.prop('name');
	expect(sourceProp).toBe('inbox');
});

test('avatar component should  return  source Image', async () => {
	const wrapper = mount(
		<BlueBaseApp plugins={[Plugin]}>
			<Avatar type="text" text="N" />
		</BlueBaseApp>
	);

	await waitForElement(wrapper, Avatar);

	const sourceProp: any = wrapper
		.find('Avatar')
		.first()
		.text();
	expect(sourceProp).toBe('N');
});

import { BlueBase, BlueBaseApp } from '@bluebase/core';
import { Button } from '@bluebase/components';
import Plugin from '../index';
import React from 'react';
import { mount } from 'enzyme';
import { waitForElement } from 'enzyme-async-helpers';

test('Plugin should be correctly registered', async () => {
	const BB = new BlueBase();
	await BB.Plugins.register(Plugin);

	expect(BB.Plugins.has('material-ui')).toBeTruthy();
});

test('plugin should map bluebase theme to material ui theme', async () => {

	const configs = {
		'theme.overrides': { palette: { background: { default: 'red' } } }
	};
	const wrapper = mount(
		<BlueBaseApp configs={configs} plugins={[Plugin]}>
			<Button title="Foo" color="primary" />
		</BlueBaseApp>
	);

	await waitForElement(wrapper, Button);

	const theme: any = wrapper.find('MuiThemeProviderOld').first().prop('theme');

	// expect(wrapper).toMatchSnapshot();
	expect(theme.palette.background.default).toBe('red');
	expect(theme.palette.type).toBe('light');
	expect(theme.direction).toBe('ltr');
});

test('plugin should map correct content direction to material ui theme', async () => {

	// I18nManager.forceRTL(true);

	const configs = {
		'direction': 'rtl',
		'theme.overrides': { palette: { background: { default: 'red' } } },
	};
	const wrapper = mount(
		<BlueBaseApp configs={configs} plugins={[Plugin]}>
			<Button title="Foo" color="primary" />
		</BlueBaseApp>
	);

	await waitForElement(wrapper, Button);

	const theme: any = wrapper.find('MuiThemeProviderOld').first().prop('theme');

	// expect(wrapper).toMatchSnapshot();
	expect(theme.palette.background.default).toBe('red');
	expect(theme.palette.type).toBe('light');
	expect(theme.direction).toBe('rtl');
});

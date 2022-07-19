/* eslint-disable react/no-unescaped-entities */
import { BlueBaseApp } from '@bluebase/core';
import { mount } from 'enzyme';
import { waitForElement } from 'enzyme-async-helpers';
import React from 'react';
import { Text } from 'react-native';

import Plugin from '../../../';
import { DrawerActions, DrawerLayout, DrawerLayoutState } from '../';

// tslint:disable: jsx-no-lambda

describe('DrawerLayout', () => {
	it('should render a simple "front" type drawer', async () => {
		const component = mount(
			<BlueBaseApp plugins={[Plugin]}>
				<DrawerLayout
					// open
					drawerWidth={200}
					// drawerPosition="left"
					renderNavigationView={() => <Text testID="navigation-view">I'm inside drawer</Text>}
				>
					<Text testID="drawer-layout-children">I'm DrawerLayout's children</Text>
				</DrawerLayout>
			</BlueBaseApp>
		);

		await waitForElement(component as any, DrawerLayout);

		// expect(component).toMatchSnapshot();
		expect(component.find('Drawer').first().prop('open')).toBe(false);

		expect(component.find('Drawer Text[testID="navigation-view"]')).toHaveLength(0);
		expect(
			component.find('DrawerLayout Text[testID="drawer-layout-children"]').length
		).toBeGreaterThan(0);
	});

	it('should render an open drawer', async () => {
		const component = mount(
			<BlueBaseApp plugins={[Plugin]}>
				<DrawerLayout
					open
					drawerWidth={200}
					// drawerPosition="left"
					renderNavigationView={() => <Text testID="navigation-view">I'm inside drawer</Text>}
				>
					<Text testID="drawer-layout-children">I'm DrawerLayout's children</Text>
				</DrawerLayout>
			</BlueBaseApp>
		);

		await waitForElement(component as any, DrawerLayout);

		// expect(component).toMatchSnapshot();
		expect(component.find('Drawer').first().prop('open')).toBe(true);
	});

	it('should render a drawer positioned on the right', async () => {
		const component = mount(
			<BlueBaseApp plugins={[Plugin]}>
				<DrawerLayout
					// open
					drawerWidth={200}
					drawerPosition="right"
					renderNavigationView={() => <Text testID="navigation-view">I'm inside drawer</Text>}
				>
					<Text testID="drawer-layout-children">I'm DrawerLayout's children</Text>
				</DrawerLayout>
			</BlueBaseApp>
		);

		await waitForElement(component as any, DrawerLayout);

		// expect(component).toMatchSnapshot();
		expect(component.find('Drawer').first().prop('anchor')).toBe('right');
	});

	it('should render a "slide" type drawer', async () => {
		const component = mount(
			<BlueBaseApp plugins={[Plugin]}>
				<DrawerLayout
					drawerType="slide"
					drawerWidth={200}
					renderNavigationView={() => <Text testID="navigation-view">I'm inside drawer</Text>}
				>
					<Text testID="drawer-layout-children">I'm DrawerLayout's children</Text>
				</DrawerLayout>
			</BlueBaseApp>
		);

		await waitForElement(component as any, DrawerLayout);

		// expect(component).toMatchSnapshot();
		expect(component.find('Drawer').first().prop('variant')).toBe('persistent');
	});

	it('should render a "slide" type drawer with open prop', async () => {
		const component = mount(
			<BlueBaseApp plugins={[Plugin]}>
				<DrawerLayout
					drawerType="slide"
					drawerWidth={200}
					open
					renderNavigationView={() => <Text testID="navigation-view">I'm inside drawer</Text>}
				>
					<Text testID="drawer-layout-children">I'm DrawerLayout's children</Text>
				</DrawerLayout>
			</BlueBaseApp>
		);

		await waitForElement(component as any, DrawerLayout);

		// expect(component).toMatchSnapshot();
		expect(component.find('Drawer').first().prop('variant')).toBe('persistent');
		expect(component.find('Drawer').first().prop('open')).toBe(true);
	});

	it('should be controllable through DrawerActions', async () => {
		const component = mount(
			<BlueBaseApp plugins={[Plugin]}>
				<DrawerLayout
					drawerType="front"
					drawerWidth={200}
					renderNavigationView={() => <Text testID="navigation-view">I'm inside drawer</Text>}
				>
					<DrawerActions>
						{(_navigation) => (
							<Text testID="drawer-layout-children">I'm DrawerLayout's children</Text>
						)}
					</DrawerActions>
				</DrawerLayout>
			</BlueBaseApp>
		);

		await waitForElement(component as any, DrawerLayout);

		const state: DrawerLayoutState = component.find('DrawerLayout').first().state();

		expect(component.find('Drawer').first().prop('open')).toBe(false);

		state.openDrawer();
		component.update();

		expect(component.find('Drawer').first().prop('open')).toBe(true);

		state.closeDrawer();
		component.update();

		expect(component.find('Drawer').first().prop('open')).toBe(false);

		state.toggleDrawer();
		component.update();

		expect(component.find('Drawer').first().prop('open')).toBe(true);

		state.toggleDrawer();
		component.update();

		expect(component.find('Drawer').first().prop('open')).toBe(false);

		const onBackdropClick = component.find('Drawer').first().prop('onBackdropClick') as any;

		onBackdropClick();
		component.update();

		expect(component.find('Drawer').first().prop('open')).toBe(true);

		onBackdropClick();
		component.update();

		expect(component.find('Drawer').first().prop('open')).toBe(false);
	});
});

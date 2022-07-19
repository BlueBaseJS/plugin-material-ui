import { shallow } from 'enzyme';
import React from 'react';

import { DrawerSection } from '../DrawerSection';

describe('DrawerSection', () => {

	test('should forward title prop as subheader', () => {
		const component = shallow(
			<DrawerSection title="Item 1" />
		);
		expect(component.props().subheader).toBeTruthy();
	});

	test('should forward title prop as subheader=null', () => {
		const component = shallow(
			<DrawerSection />
		);
		// expect(component).toMatchSnapshot();
		expect(component.props().subheader).toBeNull();
	});

});

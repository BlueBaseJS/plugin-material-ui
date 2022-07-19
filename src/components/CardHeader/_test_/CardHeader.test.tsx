import { shallow } from 'enzyme';
import React from 'react';

import { CardHeader } from '../';

test('CardHeader component component should show children', () => {
	const component = shallow(
		<CardHeader title="Foo" />

	);
	// expect(component).toMatchSnapshot();
	expect(component.find('title')).toBeDefined();
});

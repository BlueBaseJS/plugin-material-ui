import { H6 } from '../H6';
import React from 'react';
import { shallow } from 'enzyme';


test('H6 component with a sample text', () => {
	const h6 = shallow(
    <H6>Example</H6>
	);
	expect(h6).toBeDefined();
});

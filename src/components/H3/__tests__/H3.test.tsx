import { H3 } from '../H3';
import React from 'react';
import { shallow } from 'enzyme';


test('H3 component with a sample text', () => {
	const h3 = shallow(
    <H3>Example</H3>
	);
	expect(h3).toBeDefined();
});

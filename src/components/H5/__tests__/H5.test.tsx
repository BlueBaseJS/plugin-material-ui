import { H5 } from '../H5';
import React from 'react';
import { shallow } from 'enzyme';


test('H5 component with a sample text', () => {
	const h5 = shallow(
    <H5>Example</H5>
	);
	expect(h5).toBeDefined();
});

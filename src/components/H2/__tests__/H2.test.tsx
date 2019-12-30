import { H2 } from '../H2';
import React from 'react';
import { shallow } from 'enzyme';


test('H2 component with a sample text', () => {
	const h2 = shallow(
    <H2>Example</H2>
	);
	expect(h2).toBeDefined();
});

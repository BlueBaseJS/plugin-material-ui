import { H4 } from '../H4';
import React from 'react';
import { shallow } from 'enzyme';


test('H4 component with a sample text', () => {
	const h4 = shallow(
    <H4>Example</H4>
	);
	expect(h4).toBeDefined();
});

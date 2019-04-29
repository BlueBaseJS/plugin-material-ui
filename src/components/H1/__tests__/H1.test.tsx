import { H1 } from '../H1';
import React from 'react';
import { shallow } from 'enzyme';


test('H1 component with a sample text', () => {
	const h1 = shallow(
    <H1>Example</H1>
    );
	expect(h1).toBeDefined();
});

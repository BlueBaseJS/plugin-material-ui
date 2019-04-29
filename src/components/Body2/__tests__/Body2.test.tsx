import { Body2 } from '../Body2';
import React from 'react';
import { shallow } from 'enzyme';


test('Body2 component with a sample text', () => {
	const body2 = shallow(
    <Body2>Example</Body2>
    );
	expect(body2).toBeDefined();
});

import { Body1 } from '../Body1';
import React from 'react';
import { shallow } from 'enzyme';


test('Body1 component with a sample text', () => {
	const body1 = shallow(
    <Body1>Example</Body1>
    );
	expect(body1).toBeDefined();
});

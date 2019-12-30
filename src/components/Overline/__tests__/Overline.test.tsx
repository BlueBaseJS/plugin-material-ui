import { Overline } from '../Overline';
import React from 'react';
import { shallow } from 'enzyme';


test('Overline component with a sample text', () => {
	const overline = shallow(
    <Overline>Example</Overline>
    );
	expect(overline).toBeDefined();
});

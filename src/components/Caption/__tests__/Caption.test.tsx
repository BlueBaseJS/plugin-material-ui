import { Caption } from '../Caption';
import React from 'react';
import { shallow } from 'enzyme';


test('Caption component with a sample text', () => {
	const caption = shallow(
    <Caption>Example</Caption>
    );
	expect(caption).toBeDefined();
});

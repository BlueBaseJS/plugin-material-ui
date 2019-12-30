import React from 'react';
import { Subtitle2 } from '../Subtitle2';
import { shallow } from 'enzyme';


test('Subtitle2 component with a sample text', () => {
	const subtitle2 = shallow(
    <Subtitle2>Example</Subtitle2>
    );
	expect(subtitle2).toBeDefined();
});

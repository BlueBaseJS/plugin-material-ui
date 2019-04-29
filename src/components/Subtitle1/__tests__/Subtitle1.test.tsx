import React from 'react';
import { Subtitle1 } from '../Subtitle1';
import { shallow } from 'enzyme';


test('Subtitle1 component with a sample text', () => {
	const subtitle1 = shallow(
    <Subtitle1>Example</Subtitle1>
    );
	expect(subtitle1).toBeDefined();
});

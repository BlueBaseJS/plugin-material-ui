import { shallow } from 'enzyme';
import React from 'react';

import { Divider } from '../Divider';

test('Divider component with inset variant=inset', () => {
	const divider = shallow(
		<Divider inset />
	);
	expect(divider.props().variant).toBe('inset');
});

test('Divider component with inset variant=fullWidth', () => {
	const divider = shallow(
		<Divider inset={false} />
	);
	expect(divider.props().variant).toBe('fullWidth');
});

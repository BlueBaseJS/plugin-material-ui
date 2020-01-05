import { Menu } from '../Menu';
import { MenuItem } from '../MenuItem';
import React from 'react';
import { shallow } from 'enzyme';

test('Menu component should use children prop to show content', () => {
	const component = shallow(
		<Menu>
			<MenuItem title="MenuItem" />
		</Menu>
	);
	expect(component.find(MenuItem).prop('title')).toBe('MenuItem');
});

test('Menu component should use children prop to show content', () => {
	const component = shallow(<MenuItem title="MenuItem" />);
	expect(component.props().title).toBe('MenuItem');
});

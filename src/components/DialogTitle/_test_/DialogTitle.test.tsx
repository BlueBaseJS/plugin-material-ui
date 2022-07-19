import { shallow } from 'enzyme';
import React from 'react';
import { Text } from 'react-native';

import { DialogTitle } from '../index';

test('DialogTitle component should use child prop to show children', () => {
	const component = shallow(
		<DialogTitle>
			<Text>DialogTitle</Text>
		</DialogTitle>
	);
	expect(component.childAt(0).childAt(0).text()).toEqual('DialogTitle');

});


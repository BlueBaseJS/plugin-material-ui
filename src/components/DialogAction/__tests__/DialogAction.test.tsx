import { shallow } from 'enzyme';
import React from 'react';
import { Text } from 'react-native';

import { DialogActions } from '../index';

test('DialogAction component should use child prop to show children', () => {
	const component = shallow(
		<DialogActions>
			<Text>DialogAction</Text>
		</DialogActions>
	);
	// expect(component).toMatchSnapshot();
	expect(component.childAt(0).childAt(0).text()).toEqual('DialogAction');

});


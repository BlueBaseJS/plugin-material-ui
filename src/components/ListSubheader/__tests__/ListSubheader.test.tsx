import { shallow } from 'enzyme';
import React from 'react';

import { ListSubheader } from '../ListSubheader';

test('ListSubheader component with inset prop=true', () => {
	const listSubheader = shallow(<ListSubheader inset>{null}</ListSubheader>);
	expect(listSubheader.props().inset).toEqual(true);
});

test('ListSubheader component with inset prop=false', () => {
	const listSubheader = shallow(<ListSubheader inset={false}>{null}</ListSubheader>);
	expect(listSubheader.props().inset).toEqual(false);
});

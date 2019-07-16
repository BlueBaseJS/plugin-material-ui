import { ListSubheader } from '../ListSubheader';
import React from 'react';
import { shallow } from 'enzyme';

test('ListSubheader component with inset prop=true', () => {
	const listSubheader = shallow(<ListSubheader inset={true}>{null}</ListSubheader>);
	expect(listSubheader.props().inset).toEqual(true);
});

test('ListSubheader component with inset prop=false', () => {
	const listSubheader = shallow(<ListSubheader inset={false}>{null}</ListSubheader>);
	expect(listSubheader.props().inset).toEqual(false);
});

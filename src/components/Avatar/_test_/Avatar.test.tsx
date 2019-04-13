import { Avatar } from '../Avatar';
import React from 'react';
import { mount } from 'enzyme';

test('avatar component should  return empty source', () => {
	const component = mount(
    <Avatar src="" />
  );
  // expect(component).toMatchSnapshot();
	expect(component.find('Avatar').first().prop('src')).toEqual('');
});



test('avatar component should  return  source Image', () => {
	const component = mount(
    <Avatar src="https://s3-us-west-2.amazonaws.com/bluerainimages/water-dispenser.svg" />
  );
  // expect(component).toMatchSnapshot();
	expect(component.find('Avatar').first().prop('src')).toEqual('https://s3-us-west-2.amazonaws.com/bluerainimages/water-dispenser.svg');
});
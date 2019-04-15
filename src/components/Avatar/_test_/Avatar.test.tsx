import { Avatar } from '../Avatar';
import React from 'react';
import { shallow, mount } from 'enzyme';
import { BlueBaseApp } from '@bluebase/core';
import Plugin from '../../../index';
import { waitForElement } from 'enzyme-async-helpers';

const path = 'https://s3-us-west-2.amazonaws.com/bluerainimages/water-dispenser.svg';




test('avatar component should  return  source Image', async () => {


	const wrapper = mount(
    <BlueBaseApp plugins={[Plugin]}>

      <Avatar
        type="image"
        image={{ uri: path }}
      />

    </BlueBaseApp>
  );

	await waitForElement(wrapper, Avatar);

	const sourceProp: any = wrapper.find('Avatar BlueBaseImage').first().prop('source');
	expect(sourceProp.uri).toBe(path);

});



test('avatar component should  return  source Image', () => {


	shallow(


    <Avatar type="image" image={{ uri: 'https://s3-us-west-2.amazonaws.com/bluerainimages/water-dispenser.svg' }} />
  );
  // expect(component).toMatchSnapshot();
  // 	expect(component.find('Avatar').first().prop('src')).toEqual('https://s3-us-west-2.amazonaws.com/bluerainimages/water-dispenser.svg');
});



test('avatar component should  return  source Image', () => {


	shallow(


    <Avatar type="image" src="https://s3-us-west-2.amazonaws.com/bluerainimages/water-dispenser.svg" />
  );
  // expect(component).toMatchSnapshot();
  // 	expect(component.find('Avatar').first().prop('src')).toEqual('https://s3-us-west-2.amazonaws.com/bluerainimages/water-dispenser.svg');
});



test('avatar component should  return  source Image', () => {


	shallow(


    <Avatar type="text" src="https://s3-us-west-2.amazonaws.com/bluerainimages/water-dispenser.svg" />
  );
  // expect(component).toMatchSnapshot();
  // 	expect(component.find('Avatar').first().prop('src')).toEqual('https://s3-us-west-2.amazonaws.com/bluerainimages/water-dispenser.svg');
});



test('avatar component should  return  source Image', () => {


	shallow(


    <Avatar type="icon" src="https://s3-us-west-2.amazonaws.com/bluerainimages/water-dispenser.svg" />
  );
  // expect(component).toMatchSnapshot();
  // 	expect(component.find('Avatar').first().prop('src')).toEqual('https://s3-us-west-2.amazonaws.com/bluerainimages/water-dispenser.svg');
});


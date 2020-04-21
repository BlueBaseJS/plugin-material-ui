import { PickerItem } from '../PickerItem';
import React from 'react';
// import { Select } from '@material-ui/core';
import { mount } from 'enzyme';
import { waitForElement } from 'enzyme-async-helpers';

describe('Picker Item', () => {
    it('Render Picker item successfully', async () => {
        const component = mount(<PickerItem label="test" />);
        await waitForElement(component, PickerItem);
        expect(component.find('li').exists()).toBe(true);
        expect(component.find('li').prop('role')).toBe('menuitem');
    });
})
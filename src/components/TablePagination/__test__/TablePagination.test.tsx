import { BlueBaseApp } from '@bluebase/core';
import Plugin from '../../../index';
import React from 'react';
import { TablePagination } from '../index';
import { mount } from 'enzyme';
import { waitForElement } from 'enzyme-async-helpers';

describe('TablePagination', () => {
	it('should show table pagination component', async () => {
		const onPageChange = jest.fn();
		const onChangeRowsPerPage = jest.fn();

		const wrapper = mount(
			<BlueBaseApp plugins={[Plugin]}>
				<TablePagination
					page={0}
					count={25}
					rowsPerPage={10}
					onPageChange={onPageChange}
					onChangeRowsPerPage={onChangeRowsPerPage}
				/>
			</BlueBaseApp>
		);
		await waitForElement(wrapper, TablePagination);

		const onNextClick: any = wrapper
			.find('ForwardRef(IconButton)[title="Next page"]')
			.prop('onClick');
		onNextClick();

		expect(onPageChange).toHaveBeenCalledTimes(1);
		expect(onPageChange).toHaveBeenLastCalledWith(1);

		const onChange: any = wrapper.find('Select').prop('onChange');
		onChange({
			target: {
				value: 50,
			},
		});

		expect(onChangeRowsPerPage).toHaveBeenCalledTimes(1);
		expect(onChangeRowsPerPage).toHaveBeenLastCalledWith(50);
	});
});

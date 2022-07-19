import { BlueBaseApp } from '@bluebase/core';
import { mount } from 'enzyme';
import { waitForElement } from 'enzyme-async-helpers';
import React from 'react';

import Plugin from '../../../index';
import { Pagination } from '../Pagination';

describe('TablePagination', () => {
	it('should show pagination component', async () => {
		const onChange = jest.fn();

		const wrapper = mount(
			<BlueBaseApp plugins={[Plugin]}>
				<Pagination page={2} count={10} onChange={onChange} />
			</BlueBaseApp>
		);
		await waitForElement(wrapper, Pagination);

		const onNextClick: any = wrapper
			.find('ForwardRef(PaginationItem)[type="next"]')
			.prop('onClick');

		onNextClick({}, 3);
		expect(onChange).toHaveBeenCalledTimes(1);
		expect(onChange).toHaveBeenLastCalledWith(3);
	});

	it('should not call onChange', async () => {
		const onChange = jest.fn();

		const wrapper = mount(
			<BlueBaseApp plugins={[Plugin]}>
				<Pagination page={2} count={10} />
			</BlueBaseApp>
		);
		await waitForElement(wrapper, Pagination);

		const onNextClick: any = wrapper
			.find('ForwardRef(PaginationItem)[type="next"]')
			.prop('onClick');

		onNextClick({}, 3);
		expect(onChange).toHaveBeenCalledTimes(0);
	});
});

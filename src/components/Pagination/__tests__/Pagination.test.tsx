import MuiPagination from '@material-ui/lab/Pagination';
import { Pagination } from '../Pagination';
import React from 'react';
import { shallow } from 'enzyme';

test('Menu component should use children prop to show content', () => {
	const component = shallow(<Pagination count={10} />);
	expect(component.find(MuiPagination).prop('count')).toBe(10);
});

import { TablePagination } from '@bluebase/components';
import storiesOf from '@bluebase/storybook-addon';
import React from 'react';

const stories = storiesOf('TablePagination', module);

stories.add('TablePagination', () => (
	<TablePagination page={0} count={25} rowsPerPage={10} onPageChange={() => null} onChangeRowsPerPage={(num: any) => console.log(num)} />
));

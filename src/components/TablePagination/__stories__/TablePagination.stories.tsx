import React from 'react';
import { TablePagination } from '@bluebase/components';
import storiesOf from '@bluebase/storybook-addon';

const stories = storiesOf('TablePagination', module);

stories.add('TablePagination', () => (
	<TablePagination page={2} count={2} numberOfPages={2} onPageChange={() => null}>
		{'TablePagination'}
	</TablePagination>
));

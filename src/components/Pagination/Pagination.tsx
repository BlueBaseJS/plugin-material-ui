import { PaginationDefaultProps, PaginationProps } from '@bluebase/components';

import MuiPagination from '@material-ui/lab/Pagination';
import { StyleSheet } from 'react-native';
import { componentMapper } from '@bluebase/component-mapper';

export const Pagination = componentMapper<PaginationProps>(
	MuiPagination,
	{
		color: () => 'primary',
		style: ({ style }: any) => StyleSheet.flatten(style),
	},
	{ rest: true }
);

Pagination.defaultProps = PaginationDefaultProps;

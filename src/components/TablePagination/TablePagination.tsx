import { TablePaginationDefaultProps, TablePaginationProps } from '@bluebase/components';
import MuiTablePagination from '@material-ui/core/TablePagination';
import React from 'react';

export const TablePagination = (props: TablePaginationProps) => {
	const RowsPerPage = () => props.count / props.numberOfPages;

	return (
		<MuiTablePagination
			rowsPerPage={RowsPerPage()}
			onChangePage={props.onPageChange as any}
			count={props.count as any}
			style={props.style as any}
			{...props}
		>
			{props.children}
		</MuiTablePagination>
	);
};

TablePagination.defaultProps = TablePaginationDefaultProps;

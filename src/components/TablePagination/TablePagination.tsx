import { TablePaginationDefaultProps, TablePaginationProps } from '@bluebase/components';

import MuiTablePagination from '@material-ui/core/TablePagination';
import React from 'react';
import get from 'lodash.get';
import { noop } from '../../helpers';

export const TablePagination = (props: TablePaginationProps) => {
	const {
		count,
		onPageChange,
		page,
		rowsPerPage,
		rowsPerPageOptions,
		style,
		onChangeRowsPerPage: _onChangeRowsPerPage,
		...rest
	} = props;

	const onChangeRowsPerPage = get(props, 'onChangeRowsPerPage', noop);
	const onChangePage = (_event: any, pageNum: number) => onPageChange(pageNum);

	const onChangeRowsPerPageCustom: any = (event: any) => {
		onChangeRowsPerPage(event.target.value);
	};

	return (
		<MuiTablePagination
			count={count}
			onChangePage={onChangePage}
			page={page}
			rowsPerPage={rowsPerPage}
			rowsPerPageOptions={rowsPerPageOptions}
			onChangeRowsPerPage={onChangeRowsPerPageCustom}
			style={style as any}
			{...rest}
		/>
	);
};

TablePagination.defaultProps = TablePaginationDefaultProps;

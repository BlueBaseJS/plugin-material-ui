import { TableTitleDefaultProps, TableTitleProps } from '@bluebase/components';
import MuiTableCell from '@material-ui/core/TableCell';
import MuiTableSortLabel from '@material-ui/core/TableSortLabel';
import React from 'react';

export const TableTitle = (props: TableTitleProps) => {
	const { direction, style, children, ...rest } = props;
	return (
		<MuiTableCell style={style as any} {...rest}>
			<MuiTableSortLabel direction={direction as any}>{children}</MuiTableSortLabel>
		</MuiTableCell>
	);
};
TableTitle.defaultProps = TableTitleDefaultProps;

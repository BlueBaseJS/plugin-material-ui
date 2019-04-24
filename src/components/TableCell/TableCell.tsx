import { TableCellDefaultProps, TableCellProps } from '@bluebase/components';
import MuiTableCell from '@material-ui/core/TableCell';
import React from 'react';

export const TableCell = (props: TableCellProps) => {
	const { style, children, ...rest } = props;
	return (
		<MuiTableCell style={style as any} {...rest}>
			{children}
		</MuiTableCell>
	);
};

TableCell.defaultProps = TableCellDefaultProps;

import { TableRowDefaultProps, TableRowProps } from '@bluebase/components';
import MuiTableRow from '@material-ui/core/TableRow';
import React from 'react';
export const TableRow = (props: TableRowProps) => {
	const { style, children, ...rest } = props;
	return (
		<MuiTableRow style={style as any} {...rest}>
			{children}
		</MuiTableRow>
	);
};

TableRow.defaultProps = TableRowDefaultProps;

import { TableHeadDefaultProps, TableHeadProps } from '@bluebase/components';
import MuiTableHead from '@material-ui/core/TableHead';
import MuiTableRow from '@material-ui/core/TableRow';
import React from 'react';

export const TableHead = (props: TableHeadProps) => {
	const { style, children, ...rest } = props;
	return (
		<MuiTableHead style={style as any} {...rest}>
			<MuiTableRow>{children}</MuiTableRow>
		</MuiTableHead>
	);
};
TableHead.defaultProps = TableHeadDefaultProps;

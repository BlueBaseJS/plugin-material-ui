import { TableHeadDefaultProps, TableHeadProps } from '@bluebase/components';
import MuiTableHead from '@material-ui/core/TableHead';
import React from 'react';
export const TableHead = (props: TableHeadProps) => {
	const { style, children, ...rest } = props;
	return (
		<MuiTableHead style={style as any} {...rest}>
			{children}
		</MuiTableHead>
	);
};
TableHead.defaultProps = TableHeadDefaultProps;

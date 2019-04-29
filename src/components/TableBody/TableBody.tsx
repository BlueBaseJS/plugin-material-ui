import { TableBodyDefaultProps, TableBodyProps } from '@bluebase/components';
import MuiTableBody from '@material-ui/core/TableBody';
import React from 'react';

export const TableBody = (props: TableBodyProps) => {
	const { style, children, ...rest } = props;
	return (
		<MuiTableBody style={style as any} {...rest}>
			{children}
		</MuiTableBody>
	);
};

TableBody.defaultProps = TableBodyDefaultProps;

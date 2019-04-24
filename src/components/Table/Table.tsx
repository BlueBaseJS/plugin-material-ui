import { TableDefaultProps, TableProps } from '@bluebase/components';
import MuiTable from '@material-ui/core/Table';
import React from 'react';

const Table = (props: TableProps) => {
	const { style, children, ...rest } = props;
	return (
		<MuiTable style={style as any} {...rest}>
			{children}
		</MuiTable>
	);
};

Table.defaultProps = TableDefaultProps;
export { Table };

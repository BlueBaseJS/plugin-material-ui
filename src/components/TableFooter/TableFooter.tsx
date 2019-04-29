import { TableFooterDefaultProps, TableFooterProps } from '@bluebase/components';
import MuiTableFooter from '@material-ui/core/TableFooter';
import React from 'react';
export const TableFooter = (props: TableFooterProps) => {
	const { style, children, ...rest } = props;
	return (
		<MuiTableFooter style={style as any} {...rest}>
			{children}
		</MuiTableFooter>
	);
};

TableFooter.defaultProps = TableFooterDefaultProps;

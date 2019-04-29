import { TableTitleDefaultProps, TableTitleProps } from '@bluebase/components';
import MuiTableSortLabel from '@material-ui/core/TableSortLabel';
import React from 'react';
export const TableTitle = (props: TableTitleProps) => {
	const { direction, style, children, ...rest } = props;
	return (
		<MuiTableSortLabel direction={direction as any} style={style as any} {...rest}>
			{children}
		</MuiTableSortLabel>
	);
};
TableTitle.defaultProps = TableTitleDefaultProps;

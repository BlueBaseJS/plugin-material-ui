import { PaginationDefaultProps, PaginationProps } from '@bluebase/components';
import MuiPagination from '@material-ui/lab/Pagination';
import React from 'react';
import { StyleSheet } from 'react-native';

export const Pagination = (props: PaginationProps) => {
	const { count, disabled, onChange, page, testID, style, ...rest } = props;

	const onChangeCustom = (_event: React.ChangeEvent<unknown>, pageNum: number) => {
		if (onChange) {
			onChange(pageNum);
		}
	};

	return (
		<MuiPagination
			color="primary"
			count={count}
			disabled={disabled}
			onChange={onChangeCustom}
			page={page}
			style={StyleSheet.flatten(style)}
			{...rest}
		/>
	);
};

Pagination.defaultProps = PaginationDefaultProps;

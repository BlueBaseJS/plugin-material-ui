import React from 'react';
import Typography from '@material-ui/core/Typography';

export const H6 = (props: any) =>
	<Typography variant="h6" {...props}>{props.children}</Typography>;

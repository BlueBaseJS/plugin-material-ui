import React from 'react';
import Typography from '@material-ui/core/Typography';

export const H5 = (props: any) =>
	<Typography variant="h5" {...props}>{props.children}</Typography>;

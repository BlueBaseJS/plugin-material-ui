import React from 'react';
import Typography from '@material-ui/core/Typography';

export const H1 = (props: any) =>
	<Typography variant="h1" {...props}>{props.children}</Typography>;

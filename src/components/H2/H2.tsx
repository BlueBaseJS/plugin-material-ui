import React from 'react';
import Typography from '@material-ui/core/Typography';

export const H2 = (props: any) =>
	<Typography variant="h2" {...props}>{props.children}</Typography>;

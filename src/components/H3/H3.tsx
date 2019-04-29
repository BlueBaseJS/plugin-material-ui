import React from 'react';
import Typography from '@material-ui/core/Typography';

export const H3 = (props: any) =>
	<Typography variant="h3" {...props}>{props.children}</Typography>;
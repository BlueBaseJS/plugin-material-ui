import React from 'react';
import Typography from '@material-ui/core/Typography';

export const Body1 = (props: any) =>
	<Typography variant="body1" {...props}>{props.children}</Typography>;

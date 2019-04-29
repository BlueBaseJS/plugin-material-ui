import React from 'react';
import Typography from '@material-ui/core/Typography';

export const Overline = (props: any) =>
	<Typography variant="overline" {...props}>{props.children}</Typography>;

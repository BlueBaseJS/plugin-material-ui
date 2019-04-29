import React from 'react';
import Typography from '@material-ui/core/Typography';

export const Caption = (props: any) =>
	<Typography variant="caption" {...props}>{props.children}</Typography>;

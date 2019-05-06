import { H1Props } from '@bluebase/components';
import React from 'react';
import Typography from '@material-ui/core/Typography';

export const H1 = (props: H1Props) =>
	<Typography style={{} as any} variant="h1" {...props}/>;

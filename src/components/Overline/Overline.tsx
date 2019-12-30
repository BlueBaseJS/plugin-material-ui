import { OverlineProps } from '@bluebase/components';
import React from 'react';
import Typography from '@material-ui/core/Typography';

export const Overline = (props: OverlineProps) =>
	<Typography style={{} as any} variant="overline" {...props}/>;

import { CaptionProps } from '@bluebase/components';
import React from 'react';
import Typography from '@material-ui/core/Typography';

export const Caption = (props: CaptionProps) =>
	<Typography style={{} as any} variant="caption" {...props}/>;

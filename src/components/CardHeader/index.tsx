import { CardHeaderProps } from '@bluebase/components';
import MuiCardHeader from '@material-ui/core/CardHeader';
import { componentMapper } from '@bluebase/component-mapper';

export const CardHeader = componentMapper<CardHeaderProps>(MuiCardHeader, {
	action: 'right',
	avatar: 'left',
	subheader: 'description',
}, { rest: true });

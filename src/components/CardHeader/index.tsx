import { componentMapper } from '@bluebase/component-mapper';
import { CardHeaderProps } from '@bluebase/components';
import MuiCardHeader from '@material-ui/core/CardHeader';

export const CardHeader = componentMapper<CardHeaderProps>(MuiCardHeader, {
	action: 'right',
	avatar: 'left',
	subheader: 'description',
}, { rest: true });

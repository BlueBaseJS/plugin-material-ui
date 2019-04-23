// import { Badge as RNPBadge } from 'react-native-paper';
import { BadgeDefaultProps , BadgeProps} from '@bluebase/components';
import MUIBadge from '@material-ui/core/Badge';
import { componentMapper } from '@bluebase/component-mapper';
export const Badge = componentMapper<BadgeProps>(MUIBadge, {
	badgeContent: ({ children }: any) => children,
	color : ()=>{return 'error'}
}, { rest: true , ignore: ['children'] });
Badge.defaultProps = BadgeDefaultProps;
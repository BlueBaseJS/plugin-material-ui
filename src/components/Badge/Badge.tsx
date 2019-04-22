// import { BadgeDefaultProps, BadgeProps } from '@bluebase/components';
// import MUIBadge from '@material-ui/core/Badge';
// import { componentMapper } from '@bluebase/component-mapper';

// export const Badge = componentMapper<BadgeProps>(MUIBadge, {
// 	children: ({ children }: any) => children,
// }, { rest: true ,});

// Badge.defaultProps = BadgeDefaultProps;

import { componentMapper } from '@bluebase/component-mapper';
import { BadgeDefaultProps, BadgeProps } from '@bluebase/components';
import MUIBadge from '@material-ui/core/Badge';


export const Badge = componentMapper<BadgeProps>(MUIBadge, {
	// visible: true,
	children: ({ children }) => children,
}, { rest: true, });
Badge.defaultProps = BadgeDefaultProps;
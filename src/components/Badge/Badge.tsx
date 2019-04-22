import { BadgeDefaultProps, BadgeProps } from '@bluebase/components';
import MUIBadge from '@material-ui/core/Badge';
import React from 'react';
import { componentMapper } from '@bluebase/component-mapper';

export const BB_Badge = componentMapper<BadgeProps>(MUIBadge, {
    
}, { rest: true, });

BB_Badge.defaultProps = BadgeDefaultProps;
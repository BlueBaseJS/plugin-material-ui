import Avatar from '@material-ui/core/Avatar';
import { AvatarDefaultProps } from '@bluebase/components';
import { componentMapper } from '@bluebase/component-mapper';

const AvatarComponent = componentMapper(Avatar, {
	sizes: 'size',
	src: 'source'
}, { rest: true, defaultProps: AvatarDefaultProps });

export { AvatarComponent as Avatar };
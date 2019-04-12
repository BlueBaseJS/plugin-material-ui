// import { AvatarDefaultProps } from '@bluebase/components';
import Avatar from '@material-ui/core/Avatar';
import { componentMapper } from '@bluebase/component-mapper';

const AvatarComponent = componentMapper(Avatar, {
	sizes: 'size',
	src: 'source'
}, { rest: true, });

export { AvatarComponent as Avatar };
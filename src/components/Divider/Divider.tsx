import { componentMapper } from '@bluebase/component-mapper';
import { DividerProps } from '@bluebase/components';
import MUIDivider from '@material-ui/core/Divider';

export const Divider = componentMapper<DividerProps>(
	MUIDivider,
	{
		variant: ({ inset }: DividerProps) => inset === true ? 'inset' : 'fullWidth',
	},
	{ rest: true, ignore: ['inset'] }
);


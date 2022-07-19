import { componentMapper } from '@bluebase/component-mapper';
import { MenuItemDefaultProps, MenuItemProps } from '@bluebase/components';
import MuiMenuItem from '@material-ui/core/MenuItem';

export const MenuItem = componentMapper<MenuItemProps>(
	MuiMenuItem,
	{
		children: ({ title }: MenuItemProps) => title,
		onClick: 'onPress',
	},
	{ rest: true }
);

MenuItem.defaultProps = MenuItemDefaultProps;

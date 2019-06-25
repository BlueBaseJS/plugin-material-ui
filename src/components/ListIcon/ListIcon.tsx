import { Icon, ListIconDefaultProps, ListIconProps } from '@bluebase/components';

import ListItemIcon from '@material-ui/core/ListItemIcon';
import React from 'react';
import { Theme } from '@bluebase/core';

export interface Props extends ListIconProps {
	styles?: Partial<{
		color: string;
	}>;
}

export const ListIcon = ({ styles = {}, ...rest }: Props) => (
	<ListItemIcon>
		<Icon color={styles.color} {...rest} />
	</ListItemIcon>
);

ListIcon.defaultProps = ListIconDefaultProps;

ListIcon.defaultStyles = (theme: Theme) => ({
	color: theme.palette.action.active,
});

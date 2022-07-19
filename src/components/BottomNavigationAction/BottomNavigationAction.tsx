import { BottomNavigationActionProps, DynamicIcon } from '@bluebase/components';

import MuiBottomNavigationAction from '@material-ui/core/BottomNavigationAction';
import React from 'react';
import { StyleSheet } from 'react-native';
import { Theme } from '@bluebase/core';
import { componentMapper } from '@bluebase/component-mapper';
import { or } from '../../helpers';

export const BottomNavigationAction = componentMapper<BottomNavigationActionProps>(
	MuiBottomNavigationAction,
	{
		icon: (p: any) => {
			const { icon } = p;
			if (!icon) {
				return;
			}

			if (React.isValidElement(icon)) {
				return icon;
			}

			const size = icon?.size ?? 24;

			const props = {
				size,
				style: {
					...p?.styles?.icon ?? {},
					// lineHeight: size,
					...icon.style,
				},
				...icon,
			};

			return React.createElement(DynamicIcon, props);
		},

		style: ({ style }: any) => StyleSheet.flatten(style),

		label: 'label',
		showLabel: 'showLabel',
		value: 'value',
	},
	{ rest: true }
);

(BottomNavigationAction as any).defaultStyles = (theme: Theme, { selected }: any) => ({
	icon: {
		color: or(!selected, theme.palette.text.secondary, theme.palette.primary.main),
	},
});

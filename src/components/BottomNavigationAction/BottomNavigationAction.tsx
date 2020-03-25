import { BottomNavigationActionProps, DynamicIcon } from '@bluebase/components';

import MuiBottomNavigationAction from '@material-ui/core/BottomNavigationAction';
import React from 'react';
import { StyleSheet } from 'react-native';
import { Theme } from '@bluebase/core';
import { componentMapper } from '@bluebase/component-mapper';

export const BottomNavigationAction = componentMapper<BottomNavigationActionProps>(
	MuiBottomNavigationAction,
	{
		icon: ({ icon, styles }: any) => {
			if (!icon) {
				return;
			}

			if (React.isValidElement(icon)) {
				return icon;
			}

			const size = icon.size || 24;

			const props = {
				size,
				style: {
					...styles.icon,
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
		color: !selected ? theme.palette.text.secondary : theme.palette.primary.main,
	},
});

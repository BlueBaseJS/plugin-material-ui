import { BottomNavigationActionProps, DynamicIcon } from '@bluebase/components';

import MuiBottomNavigationAction from '@material-ui/core/BottomNavigationAction';
import React from 'react';
import { StyleSheet } from 'react-native';
import { componentMapper } from '@bluebase/component-mapper';

export const BottomNavigationAction = componentMapper<BottomNavigationActionProps>(
	MuiBottomNavigationAction,
	{
		icon: ({ icon }) => {
			if (!icon) {
				return;
			}

			const size = icon.size || 24;

			const props = {
				size,
				style: {
					// lineHeight: size,
					...icon.style,
				},
				...icon,
			};

			return React.createElement(DynamicIcon, props);
		},

		onChange: 'onChange',
		style: ({ style }: any) => StyleSheet.flatten(style),

		label: 'label',
		showLabel: 'showLabel',
		value: 'value',
	}
);

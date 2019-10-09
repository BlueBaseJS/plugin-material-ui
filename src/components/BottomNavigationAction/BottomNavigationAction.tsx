import { BottomNavigationActionProps, DynamicIcon } from '@bluebase/components';
import MuiBottomNavigationAction from '@material-ui/core/BottomNavigationAction';
import React from 'react';
import { componentMapper } from '@bluebase/component-mapper';

export const BottomNavigationAction = componentMapper<BottomNavigationActionProps>(
	MuiBottomNavigationAction,
	{
		icon: ({ icon }) => {
			if (!icon) {
				return;
			}
			if (icon && typeof icon.type === 'string') {
				const size = icon.size || 24;
				const props = {
					size,
					style: {
						lineHeight: size,
						...icon.style,
					},
					...icon,
				};

				return React.createElement(DynamicIcon, props);
			} else if (React.isValidElement(icon)) {
				return icon;
			}

			return null;
		},
	},
	{
		rest: true,
	}
);

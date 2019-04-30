import { DynamicIcon, TabProps } from '@bluebase/components';
import MuiTab from '@material-ui/core/Tab';
import React from 'react';
import { componentMapper } from '@bluebase/component-mapper';

export const Tab = componentMapper<TabProps>(MuiTab, {
	icon: ({ icon }) => {

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
		}
		else if (React.isValidElement(icon)){
			return icon;
		}

		return null;
	}
}, {
	rest: true
});


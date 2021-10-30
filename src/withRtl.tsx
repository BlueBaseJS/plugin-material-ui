import { StylesProvider, jssPreset } from '@material-ui/core/styles';

import React from 'react';
import { create } from 'jss';
import rtl from 'jss-rtl';

// Configure JSS
const jss = create({ plugins: [...jssPreset().plugins, rtl()] as any });

const withRTL = (Component: React.ComponentType<any>) => (props: any) => {
	return (
		<StylesProvider jss={jss}>
			<Component {...props} />
		</StylesProvider>
	);
};

export default withRTL as any;

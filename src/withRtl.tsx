import { jssPreset, StylesProvider } from '@material-ui/core/styles';
import { create } from 'jss';
import rtl from 'jss-rtl';
import React from 'react';

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

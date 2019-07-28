import { createGenerateClassName, jssPreset } from '@material-ui/styles';

import JssProvider from 'react-jss/lib/JssProvider';
import React from 'react';
import { create } from 'jss';
import rtl from 'jss-rtl';

// Configure JSS
const jss = create({
	plugins: [...jssPreset().plugins, rtl() as any],
});

// Custom Material-UI class name generator.
const generateClassName = createGenerateClassName();

const withRTL = (Component: React.ComponentType<any>) => (props: any) => {
	return (
		<JssProvider jss={jss} generateClassName={generateClassName as any}>
			<Component {...props} />
		</JssProvider>
	);
};

export default withRTL as any;

import React from 'react';
import { getComponent } from '@bluebase/core';

const Tabs = getComponent('Tabs');
const Tab = getComponent('Tab');

export const TabsComponent = (_props: any) => {
	const [value, setValue] = React.useState(0);

	return (
		<Tabs
			value={value}
			// tslint:disable-next-line:jsx-no-lambda
			onChange={(_event: any, newValue: any) => {
				console.log(`Clicked tab ${newValue}`);
				setValue(newValue);
			}}
		>
			<Tab label="Tab 1" />
			<Tab label="Tab 2" />
			<Tab label="Tab 3" />
		</Tabs>
	);
};

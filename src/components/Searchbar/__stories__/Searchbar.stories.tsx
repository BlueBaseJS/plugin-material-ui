import React from 'react';
import { Searchbar } from '@bluebase/components';
import storiesOf from '@bluebase/storybook-addon';

storiesOf('Searchbar', module)
	.add('Basic Example', () => <Searchbar placeholder="Search" />)
	.add('With Value', () => <Searchbar placeholder="Search" value="Something" />);

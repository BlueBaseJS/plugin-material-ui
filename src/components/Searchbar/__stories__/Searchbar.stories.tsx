import { Searchbar } from '@bluebase/components';
import storiesOf from '@bluebase/storybook-addon';
import React from 'react';

storiesOf('Searchbar', module)
	.add('Basic Example', () => <Searchbar placeholder="Search" />)
	.add('With Value', () => <Searchbar placeholder="Search" value="Something" />);

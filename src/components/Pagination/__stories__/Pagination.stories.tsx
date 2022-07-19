import storiesOf from '@bluebase/storybook-addon';
import { withInfo } from '@storybook/addon-info';
import { withKnobs } from '@storybook/addon-knobs';
import React from 'react';

import { Pagination } from '../Pagination';

const stories = storiesOf('Pagination', module);

stories.addDecorator(withInfo);
stories.addDecorator(withKnobs);

stories.add('Basic Example', () => <Pagination count={10} />);

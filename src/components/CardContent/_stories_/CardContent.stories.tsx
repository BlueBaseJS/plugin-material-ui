
import { CardContentProps, } from '@bluebase/components';
import { getComponent } from '@bluebase/core';
import storiesOf from '@bluebase/storybook-addon';
import Typography from '@material-ui/core/Typography';
import { withInfo } from '@storybook/addon-info';
import { withKnobs } from '@storybook/addon-knobs';
import React from 'react';

const CardContent = getComponent<CardContentProps>('CardContent');

const stories = storiesOf('CardContent', module);

stories.addDecorator(withInfo);
stories.addDecorator(withKnobs);

stories

	.add('SimpleCard', () => (
		<RecipeReviewCard />
	));

function RecipeReviewCard() {

	return (
		<>
			<CardContent>
				<Typography component="p">
          This impressive paella is a perfect party dish and a fun meal to cook together with your
          guests. Add 1 cup of frozen peas along with the mussels, if you like.
				</Typography>
			</CardContent>
      s]

		</>
	);
}

export default RecipeReviewCard;
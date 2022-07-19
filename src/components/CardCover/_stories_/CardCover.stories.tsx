
import { CardCoverProps } from '@bluebase/components';
import { getComponent } from '@bluebase/core';
import storiesOf from '@bluebase/storybook-addon';
import { withInfo } from '@storybook/addon-info';
import { withKnobs } from '@storybook/addon-knobs';
import React from 'react';

const CardCover = getComponent<CardCoverProps>('CardCover');

const stories = storiesOf('CardMedia', module);

stories.addDecorator(withInfo);
stories.addDecorator(withKnobs);

stories

	.add('SimpleCard with Image', () => (
		<RecipeReviewCard />
	));

function RecipeReviewCard() {

	return (

		<CardCover
			style={{ width: 400, height: 400 }}
			source={{
				uri: 'https://www.careerz360.pk/cdn.careerz360.pk/Content/UserData/empr/f1172787-3c92-459c-a5cc-5a9b7da8613e/profile_pics/thumbnail_bd47c439-bf95-4c30-8be8-fe77023194a0.png'
			}}
			// title="Paella dish"
		/>

	);
}

export default RecipeReviewCard;
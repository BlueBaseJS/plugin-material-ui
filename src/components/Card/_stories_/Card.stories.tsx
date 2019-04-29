
import { CardProps, CardActionsProps, CardHeaderProps, CardCoverProps, CardContentProps } from '@bluebase/components';
import Avatar from '@material-ui/core/Avatar';
import Collapse from '@material-ui/core/Collapse';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import FavoriteIcon from '@material-ui/icons/Favorite';
import IconButton from '@material-ui/core/IconButton';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import React from 'react';
import ShareIcon from '@material-ui/icons/Share';
import Typography from '@material-ui/core/Typography';

import { getComponent } from '@bluebase/core';
import storiesOf from '@bluebase/storybook-addon';
import { withInfo } from '@storybook/addon-info';
import { withKnobs } from '@storybook/addon-knobs';

const Card = getComponent<CardProps>('Card');
const CardCover = getComponent<CardCoverProps>('CardCover');
const CardContent = getComponent<CardContentProps>('CardContent');
const CardActions = getComponent<CardActionsProps>('CardActions');
const CardHeader = getComponent<CardHeaderProps>('CardHeader');

const stories = storiesOf('Card', module);

stories.addDecorator(withInfo);
stories.addDecorator(withKnobs);

stories

  .add('SimpleCard Stories', () => (
    <RecipeReviewCard />
  ));


function RecipeReviewCard() {
	const [expanded, setExpanded] = React.useState(false);

	function handleExpandClick() {
		setExpanded(!expanded);
	}

	return (
    <Card
      onPress={() => console.log('clicked')}
      style={{ width: 400 }}
    >

        <CardHeader
          left={
            <Avatar aria-label="Recipe">
              R
          </Avatar>}
          right={
            <IconButton>
              <MoreVertIcon />
            </IconButton>
          }
          title="Shrimp and Chorizo Paella"
          description="September 14, 2016"
        >
          {}
        </CardHeader>
        <CardCover
          style={{ width: 400, height: 400 }}
          source={{
	uri: 'https://www.careerz360.pk/cdn.careerz360.pk/Content/UserData/empr/f1172787-3c92-459c-a5cc-5a9b7da8613e/profile_pics/thumbnail_bd47c439-bf95-4c30-8be8-fe77023194a0.png'
}}
        // title="Paella dish"
        />
        <CardContent>
          <Typography component="p">
            This impressive paella is a perfect party dish and a fun meal to cook together with your
            guests. Add 1 cup of frozen peas along with the mussels, if you like.
        </Typography>
        </CardContent>
        <CardActions>
          <IconButton aria-label="Add to favorites">
            <FavoriteIcon />
          </IconButton>
          <IconButton aria-label="Share">
            <ShareIcon />
          </IconButton>
          <IconButton

            onClick={handleExpandClick}
            aria-expanded={expanded}
            aria-label="Show more"
          >
            <ExpandMoreIcon />
          </IconButton>
        </CardActions>
        <Collapse in={expanded} timeout="auto" unmountOnExit>
          <CardContent>
            <Typography paragraph>Method:</Typography>
            <Typography paragraph>
              Heat 1/2 cup of the broth in a pot until simmering, add saffron and set aside for 10
              minutes.
          </Typography>
            <Typography paragraph>
              Heat oil in a (14- to 16-inch) paella pan or a large, deep skillet over medium-high
              heat. Add chicken, shrimp and chorizo, and cook, stirring occasionally until lightly
              browned, 6 to 8 minutes. Transfer shrimp to a large plate and set aside, leaving chicken
              and chorizo in the pan. Add pimentón, bay leaves, garlic, tomatoes, onion, salt and
              pepper, and cook, stirring often until thickened and fragrant, about 10 minutes. Add
              saffron broth and remaining 4 1/2 cups chicken broth; bring to a boil.
          </Typography>
            <Typography paragraph>
              Add rice and stir very gently to distribute. Top with artichokes and peppers, and cook
              without stirring, until most of the liquid is absorbed, 15 to 18 minutes. Reduce heat to
              medium-low, add reserved shrimp and mussels, tucking them down into the rice, and cook
              again without stirring, until mussels have opened and rice is just tender, 5 to 7
              minutes more. (Discard any mussels that don’t open.)
          </Typography>
            <Typography>
              Set aside off of the heat to let rest for 10 minutes, and then serve.
          </Typography>
          </CardContent>
        </Collapse>
    </Card>
	);
}

export default RecipeReviewCard;
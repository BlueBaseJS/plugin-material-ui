import { IconButton } from '@bluebase/components';
import React from 'react';
// import { action } from '@storybook/addon-ac2tions';
// import { getComponent } from '@bluebase/core';
import storiesOf from '@bluebase/storybook-addon';
import { withInfo } from '@storybook/addon-info';
import { withKnobs } from '@storybook/addon-knobs';
// const Button = getComponent<ButtonProps>('Button');

const stories = storiesOf('IconButton', module);

stories.addDecorator(withInfo);
stories.addDecorator(withKnobs);

stories.add('Contained IconButtons', () => (
	<React.Fragment>


		<IconButton onPress={() => { }}
			name="star"
			size={20}
			color='red'
		/>
		<IconButton onPress={() => { }}
			name="alarm"
			size={20}
			color='black'
		/>
		<IconButton onPress={() => { }}
			name="delete"
			size={20}
			color='black'
		/>
	</React.Fragment>
))
	.add('Colors', () => (
		<React.Fragment>
			<IconButton onPress={() => { }}
				name="delete"
				size={20}
				color='black'
			/>
			<IconButton onPress={() => { }}
				name="delete"
				size={20}
				color='red'
			/>
			<IconButton onPress={() => { }}
				name="delete"
				size={20}
				color='blue'
			/>
			<IconButton onPress={() => { }}
				name="delete"
				size={20}
				color='brown'
			/>
		</React.Fragment>
	))
	.add('Sizes', () => (
		<React.Fragment>
			<IconButton onPress={() => { }}
				name="delete"
				size={10}
				color='black'
			/>
			<IconButton onPress={() => { }}
				name="delete"
				size={20}
				color='black'
			/>
			<IconButton onPress={() => { }}
				name="delete"
				size={30}
				color='black'
			/>
			<IconButton onPress={() => { }}
				name="delete"
				size={40}
				color='black'
			/>
			<IconButton onPress={() => { }}
				name="delete"
				size={50}
				color='black'
			/>
			<IconButton onPress={() => { }}
				name="delete"
				size={60}
				color='black'
			/>
			<IconButton onPress={() => { }}
				name="delete"
				size={70}
				color='black'
			/>
		</React.Fragment>
	))
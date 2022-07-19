import { CardDefaultProps, CardProps } from '@bluebase/components';
import MuiCard from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import React from 'react';

export const Card = (props: CardProps) => {
	const { onPress, style, children, ...others } = props;
	if (onPress === undefined) {
		return (
			<MuiCard style={style as any} {...others}>{children}</MuiCard>
		);
	}
	return (
		<MuiCard style={style as any} {...others}>
			<CardActionArea onClick={onPress}>
				{children}
			</CardActionArea>
		</MuiCard>
	);

};
Card.deafultProps = CardDefaultProps;

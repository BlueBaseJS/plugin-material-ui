import { Body1, TextInputAffixDefaultProps, TextInputAffixProps } from '@bluebase/components';
import { useTheme } from '@bluebase/core';
import React from 'react';
import { StyleSheet } from 'react-native';

export const TextInputAffix = (props: TextInputAffixProps) => {
	const { text, textStyle } = props;
	const { theme } = useTheme();

	return (
		<Body1
			style={StyleSheet.flatten([
				{ color: theme.palette.text.secondary },
				textStyle,
			])}
		>
			{text}
		</Body1>
	);
};

TextInputAffix.defaultProps = TextInputAffixDefaultProps;
TextInputAffix.displayName = 'TextInputAffix';

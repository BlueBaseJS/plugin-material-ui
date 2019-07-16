import { Theme, withStyles } from '@material-ui/core';

import FormControl from '@material-ui/core/FormControl';
import FormHelperText from '@material-ui/core/FormHelperText';
import FormLabel from '@material-ui/core/FormLabel';
import MUISlider from '@material-ui/lab/Slider';
import React from 'react';
import { SliderProps } from '@bluebase/components';
import { StyleSheet } from 'react-native';
import { componentMapper } from '@bluebase/component-mapper';

const styles = (theme: Theme): any => ({
	helperText: {
		marginTop: theme.spacing.unit * 2,
	},
	inlineSlider: {
		display: 'flex',
		flex: 1,
	},
	inlineValue: {
		marginLeft: theme.spacing.unit * 2,
	},
	label: {
		flex: 1,
		marginBottom: theme.spacing.unit * 2,
	},
	labelWrapper: {
		display: 'flex',
		flexDirection: 'row',
	},
	sliderWrapper: {
		alignItems: 'center',
		display: 'flex',
		flex: 1,
	},
	value: {
		marginBottom: theme.spacing.unit * 2,
	},
});

export const Slider = withStyles(styles)(
	componentMapper<SliderProps>(
		MUISlider,
		{
			max: 'maximumValue',
			min: 'minimumValue',

			onChange: ({ onChange, onValueChange }: any) => (event: any, value: number) => {
				if (onChange) {
					onChange(event, value);
				}

				if (onValueChange) {
					onValueChange(value);
				}
			},

			classes: 'classes',
			disabled: 'disabled',
			error: 'error',
			helperText: 'helperText',
			id: 'id',
			label: 'label',
			name: 'name',
			required: 'required',
			showValue: 'showValue',
			step: 'step',
			style: ({ style }: SliderProps) => StyleSheet.flatten(style),
			value: 'value',
		},
		{
			render(newProps: any, Component: any) {
				const { error, helperText, id, label, required, classes, showValue, ...props } = newProps;

				const formControlProps = {
					error,
					required,
				};

				// Label
				let labelNode: React.ReactNode = null;

				// Render a simple label
				if (label && !showValue) {
					labelNode = (
						<FormLabel className={classes.label} htmlFor={id}>
							{label}
						</FormLabel>
					);
				}
				// If we have label and show value, then we show value in line with the label
				else if (label && showValue) {
					labelNode = (
						<div className={classes.labelWrapper}>
							<FormLabel className={classes.label} htmlFor={id}>
								{label}
							</FormLabel>
							<FormLabel className={classes.value}>{props.value}</FormLabel>
						</div>
					);
				}

				let sliderNode = <Component id={id} {...props} />;

				// If theres no label then we show value in line with the slider
				if (!label && showValue) {
					sliderNode = (
						<div className={classes.sliderWrapper}>
							<div className={classes.inlineSlider}>{sliderNode}</div>
							<FormLabel className={classes.inlineValue}>{props.value}</FormLabel>
						</div>
					);
				}

				return (
					<FormControl {...formControlProps}>
						{labelNode}
						{sliderNode}
						{helperText ? (
							<FormHelperText className={classes.helperText}>{helperText}</FormHelperText>
						) : null}
					</FormControl>
				);
			},
		}
	)
) as React.ComponentType<SliderProps>;

import { Theme, withStyles } from '@material-ui/core';

import FormControl from '@material-ui/core/FormControl';
import FormHelperText from '@material-ui/core/FormHelperText';
import FormLabel from '@material-ui/core/FormLabel';
import MUISlider from '@material-ui/core/Slider';
import React from 'react';
import { SliderProps } from '@bluebase/components';
import { StyleSheet } from 'react-native';
import { componentMapper } from '@bluebase/component-mapper';

(MUISlider as any).displayName = 'Slider';
(FormLabel as any).displayName = 'FormLabel';
(FormHelperText as any).displayName = 'FormHelperText';

const styles = (theme: Theme): any => ({
	helperText: {
		marginTop: 0,
	},
	inlineSlider: {
		display: 'flex',
		flex: 1,
	},
	inlineValue: {
		marginLeft: theme.spacing(2),
	},
	label: {
		flex: 1,
		marginBottom: 0,
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
		marginBottom: 0,
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
						<div className={classes.labelWrapper} data-testid="value-on-top">
							<FormLabel className={classes.label} htmlFor={id} data-testid="label">
								{label}
							</FormLabel>
							<FormLabel className={classes.value} data-testid="value">
								{props.value}
							</FormLabel>
						</div>
					);
				}

				let sliderNode = <Component id={id} {...props} />;

				// If theres no label then we show value in line with the slider
				if (!label && showValue) {
					sliderNode = (
						<div className={classes.sliderWrapper} data-testid="value-on-right">
							<div className={classes.inlineSlider}>{sliderNode}</div>
							<FormLabel className={classes.inlineValue} data-testid="value">
								{props.value}
							</FormLabel>
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

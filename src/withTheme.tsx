import { IntlConsumer, ThemeContext, ThemeContextData } from '@bluebase/core';
import { MuiThemeProvider, createMuiTheme } from '@material-ui/core';
import React from 'react';

export const withTheme = (Component: React.ComponentType<any>) => {

	return class ReactNativePaperProvider extends React.Component {
		static contextType = ThemeContext;

		render() {

			const { theme }: ThemeContextData = this.context;

			return (
				<IntlConsumer>
				{({ rtl }) => {

					const rnpTheme = createMuiTheme({
						direction: rtl ? 'rtl' : 'ltr',
						palette: {
							...theme.palette,
							action: theme.palette.action,
							background: {
								...theme.palette.background,
								paper: theme.palette.background.card
							},
							type: theme.mode
						},
						shape: theme.shape,
						spacing: theme.spacing,
						typography: theme.typography as any,
					});

					return (
						<MuiThemeProvider theme={rnpTheme}>
							<Component {...this.props} />
						</MuiThemeProvider>
					);
				}}
				</IntlConsumer>
			);
		}
	};
};
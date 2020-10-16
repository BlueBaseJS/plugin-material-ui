import { IntlConsumer, ThemeContext, ThemeContextData } from '@bluebase/core';
import { MuiThemeProvider, createMuiTheme } from '@material-ui/core';

import CssBaseline from '@material-ui/core/CssBaseline';
import React from 'react';

(MuiThemeProvider as any).displayName = 'MuiThemeProvider';

export const withTheme: any = (Component: React.ComponentType<any>) => {
	return class ReactNativePaperProvider extends React.Component {
		static contextType = ThemeContext;

		render() {
			const { theme }: ThemeContextData = this.context;

			// Strip color from typography.
			const typography: { [key: string]: any } = {};

			Object.keys(theme.typography).map((key) => {
				const { color, ...values } = (theme.typography as any)[key];
				typography[key] = values;
			});

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
									paper: theme.palette.background.card,
								},
								type: theme.mode,
							},
							shape: theme.shape,
							spacing: theme.spacing.unit,
							typography,
						});

						return (
							<MuiThemeProvider theme={rnpTheme}>
								<CssBaseline />
								<Component {...this.props} />
							</MuiThemeProvider>
						);
					}}
				</IntlConsumer>
			);
		}
	};
};

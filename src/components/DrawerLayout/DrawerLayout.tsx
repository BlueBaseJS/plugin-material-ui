import { DrawerActionsObject, DrawerLayoutProps, View, } from '@bluebase/components';
import Drawer from '@material-ui/core/Drawer';
import { DrawerContext } from './DrawerContext';
import React from 'react';
import { createMuiTheme } from '@material-ui/core/styles';
import { withPropsStyles } from '../../withPropsStyles';
import { Theme } from '@bluebase/core';

export interface DrawerLayoutState extends DrawerActionsObject {
	open: boolean,
}

type DrawerLayoutPropsInternal = DrawerLayoutProps & { classes: any };

export class DrawerLayoutComponent extends React.Component<DrawerLayoutPropsInternal, DrawerLayoutState> {

	static displayName = 'DrawerLayout';

	readonly state = {
		closeDrawer: () => this.setState({ open: false }),
		open: this.props.open !== undefined ? this.props.open : false,
		openDrawer: () => this.setState({ open: true }),
		toggleDrawer: () => this.setState({ open: !this.state.open }),
	};

	render() {

		const {
			children,
			classes,
			drawerPosition,
			drawerType,
			onDrawerClose,
			onDrawerOpen,
			renderNavigationView,
			style,
		} = this.props;


		const drawerProps = {
			anchor: drawerPosition,
			children: renderNavigationView && renderNavigationView(),
			className: classes.drawer,
			classes: { paper: classes.drawerPaper },
			onBackdropClick: () => this.state.toggleDrawer(),
			onClose: onDrawerClose,
			onRendered: onDrawerOpen,
			open: this.state.open,
			variant: (drawerType === 'slide') ? 'persistent' : 'temporary' as any,
		};

		const contentClassName = (drawerType === 'slide')
		? `${classes.content} ${this.state.open ? classes.contentShift : ''}`
		: '';

    // The entire state is passed to the provider
		return (
      <DrawerContext.Provider value={this.state}>
				<View style={[{ flex: 1, overflow: 'hidden' }, style]}>
					<Drawer {...drawerProps} />
					<div className={contentClassName}>
        	{children}
					</div>
				</View>
      </DrawerContext.Provider>
		);
	}
}

const muiTheme = createMuiTheme();

const styles = (props: DrawerLayoutProps, _theme: Theme) => ({
	content: {
		flexGrow: 1,
		marginLeft: 0,
		overflowY: 'auto',
		transition: muiTheme.transitions.create('margin', {
			duration: muiTheme.transitions.duration.leavingScreen,
			easing: muiTheme.transitions.easing.sharp,
		}),
	},
	contentShift: {
		marginLeft: props.drawerWidth,
		transition: muiTheme.transitions.create('margin', {
			duration: muiTheme.transitions.duration.enteringScreen,
			easing: muiTheme.transitions.easing.easeOut,
		}),
	},
	drawer: {
		flexShrink: 0,
		width: props.drawerWidth,
	},
	drawerPaper: {
		position: 'absolute',
		width: props.drawerWidth,
	},
});

export const DrawerLayout = withPropsStyles(styles)(DrawerLayoutComponent) as React.ComponentType<DrawerLayoutProps>;
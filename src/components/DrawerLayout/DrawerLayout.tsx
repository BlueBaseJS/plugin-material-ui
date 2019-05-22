import { DrawerActionsObject, DrawerLayoutProps, View, } from '@bluebase/components';
import Drawer from '@material-ui/core/Drawer';
import { DrawerContext } from './DrawerContext';
import React from 'react';
import { Theme } from '@material-ui/core/styles';
import { withPropsStyles } from '../../withPropsStyles';

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
			// onDrawerOpen,
			renderNavigationView,
			style,
		} = this.props;

		const variant = (drawerType === 'slide') ? 'persistent' : 'temporary' as any;

		const drawerProps: any = {
			anchor: drawerPosition,
			children: renderNavigationView && renderNavigationView(),
			className: classes.drawer,
			classes: { paper: classes.drawerPaper },
			onClose: onDrawerClose,
			// onRendered: onDrawerOpen,
			open: this.state.open,
			variant,
		};

		if (variant === 'temporary') {
			drawerProps.onBackdropClick = () => this.state.toggleDrawer();
		}

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

const styles = (props: DrawerLayoutProps, theme: Theme) => ({
	content: {
		flexGrow: 1,
		marginLeft: 0,
		overflowY: 'auto',
		transition: theme.transitions.create('margin', {
			duration: theme.transitions.duration.leavingScreen,
			easing: theme.transitions.easing.sharp,
		}),
	},
	contentShift: {
		marginLeft: props.drawerWidth,
		transition: theme.transitions.create('margin', {
			duration: theme.transitions.duration.enteringScreen,
			easing: theme.transitions.easing.easeOut,
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
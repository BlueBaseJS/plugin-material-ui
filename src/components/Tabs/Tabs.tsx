import MuiTabs from '@material-ui/core/Tabs';
import { componentMapper } from '@bluebase/component-mapper';

export const Tabs = componentMapper(MuiTabs, {
	// scrollButtons: () => 'auto',
	// variant: () => 'scrollable',
}, { rest: true, });

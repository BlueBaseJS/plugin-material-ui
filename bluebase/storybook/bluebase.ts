import { BootOptions, merge } from '@bluebase/core';

import { MaterialCommunityIcons } from '@bluebase/plugin-vector-icons';
import commonBootOptions from '../common/bluebase';

/**
 * Add your platform specific configs here.
 * We keep all the universal (cross platform) configs in
 * the common folder, and extend them here.
 */
const bootOptions: Partial<BootOptions> = {
	plugins: [MaterialCommunityIcons],
};

export default merge(commonBootOptions, bootOptions);

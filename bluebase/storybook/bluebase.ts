import { BootOptions } from '@bluebase/core';
import commonBootOptions from '../common/bluebase';
import deepmerge from 'deepmerge';
<<<<<<< HEAD
import { MaterialIcons } from '@bluebase/plugin-vector-icons';
=======
//import { MaterialIcons } from '@bluebase/plugin-vector-icons';

>>>>>>> 107d11c4cb38cb5fa18306424bb05537649b086b
/**
 * Add your platform specific configs here.
 * We keep all the universal (cross platform) configs in
 * the common folder, and extend them here.
 */
const bootOptions: Partial<BootOptions> = {
	plugins: [
<<<<<<< HEAD
		MaterialIcons
=======
	//	MaterialIcons
>>>>>>> 107d11c4cb38cb5fa18306424bb05537649b086b
	],
};

export default deepmerge(commonBootOptions, bootOptions);

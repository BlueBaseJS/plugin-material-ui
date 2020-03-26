import { Badge } from '../Badge';
import React from 'react';
import { shallow } from 'enzyme';

test('Badge component with visible Prop', () => {
	const component = shallow(<Badge visible={false} />);
	// expect(component).toMatchSnapshot();
	expect(component.props().visible).toEqual(false);
});

// test('Badge component with Children', () => {
// 	const component = shallow(
// 		<Badge>
//             <Text></Text>
//         </Badge>
//     );
//     console.log(component.children());
// 	// expect(component).toMatchSnapshot();
// 	expect(component.children()).toEqual(5);
// });

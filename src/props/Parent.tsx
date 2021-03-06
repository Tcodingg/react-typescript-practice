import { Child } from './Child';
import { ChildAsFC } from './Child';

// const Parent = () => {
// 	return <Child color='red' onClick={() => console.log('clicked')} />;
// };

// export default Parent;

const Parent = () => {
	return (
		<ChildAsFC color='red' onClick={() => console.log('clicked')}></ChildAsFC>
	);
};

export default Parent;

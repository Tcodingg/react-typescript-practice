import { useState } from 'react';

const UseSearch: React.FC = () => {
	const [name, setName] = useState('');
	const [user, setUser] = useState<{ name: string; age: number } | undefined>();

	const users = [
		{ name: 'Sarah', age: 20 },
		{ name: 'Alex', age: 32 },
		{ name: 'Mike', age: 24 },
	];

	const onClick = () => {
		const founderUser = users.find((user) => {
			return user.name === name;
		});

		setUser(founderUser);
	};

	return (
		<div>
			User Search
			<input
				type='text'
				value={name}
				onChange={(e) => setName(e.target.value)}
			/>
			<button onClick={onClick}>Find User</button>
			{user && user.name}
			{user && user.age}
		</div>
	);
};

export default UseSearch;

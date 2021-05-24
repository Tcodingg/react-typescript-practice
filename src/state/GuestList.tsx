import { useState } from 'react';

const GuestList: React.FC = () => {
	const [name, setName] = useState('');
	const [guests, setGuests] = useState<string[]>([]);
	const onClick = () => {
		setName('');
		setGuests([...guests, name]);
	};

	return (
		<div>
			<h3>Guest List</h3>

			<ul>
				{guests.map((guest, index) => {
					<li key={index}>{guest}</li>;
				})}
			</ul>
			<input type='text' onChange={(e) => setName(e.target.value)} />
			<button onClick={onClick}>Add guest</button>
		</div>
	);
};

export default GuestList;

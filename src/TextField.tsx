import React from 'react';

interface person {
	firstName: string;
	lastName: string;
}

interface Props {
	text: string;
	ok?: boolean;
	age?: number;
	fn?: (name: string) => string;
	person: person;
}

export const TextField: React.FC<Props> = () => {
	return (
		<div>
			<input />
		</div>
	);
};

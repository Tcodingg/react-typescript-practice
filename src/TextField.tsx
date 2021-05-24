import React, { useState, useRef } from 'react';

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
	handleChange?: () => (event: React.ChangeEvent<HTMLInputElement>) => string;
}

interface TextMode {
	text: string;
}

export const TextField: React.FC<Props> = ({ handleChange }) => {
	//const [count, setCount] = useState<number | null>(5);

	const [count, setCount] = useState<number | null>(5);
	// const inputRef = useRef<HTMLInputElement>(null);
	const inputRef = useRef<HTMLInputElement>(null);
	const divRef = useRef<HTMLInputElement>(null);

	return (
		<div ref={divRef}>
			<input ref={inputRef} onChange={handleChange} />
		</div>
	);
};

import React from 'react';

interface Props {
	text: string;
	ok: boolean;
	i: number;
	fn: () => void;
}

export const TextField: React.FC<Props> = () => {
	return (
		<div>
			<input />
		</div>
	);
};

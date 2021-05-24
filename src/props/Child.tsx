interface ChildProps {
	color: string;
	onClick: () => void;
	chlidren?: 'this is children property';
}

//first example of function component
export const Child = ({ color, onClick }: ChildProps) => {
	return (
		<div>
			{color}
			<button onClick={onClick}> click me</button>
		</div>
	);
};

//second exapmle of function component
export const ChildAsFC: React.FC<ChildProps> = ({ color, children }) => {
	return (
		<div>
			{color}
			{children}
		</div>
	);
};

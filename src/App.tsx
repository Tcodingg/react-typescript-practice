import React from 'react';

import './App.css';
import { TextField } from './TextField';

//props
//hooks
//render props

const App: React.FC = () => {
	return (
		<div>
			<TextField text='text' person={{ firstName: '', lastName: '' }} />
		</div>
	);
};

export default App;

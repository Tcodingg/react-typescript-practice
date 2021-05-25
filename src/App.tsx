import React from 'react';

import './App.css';
import GuestList from './state/GuestList';
import UserSearch from './state/UseSearch';
import { EventComponent } from './events/EventComponent';

//props
//hooks
//render props

const App: React.FC = () => {
	return (
		<div>
			<UserSearch />
			<EventComponent />
		</div>
	);
};

export default App;

import React, { createContext, useReducer } from 'react';
import reducer from './reducer';
import initialState from './store';

export const ApplicationContext = createContext();

function ApplicationContextProvider({ children }) {
	const [state, dispatch] = useReducer(reducer, initialState);

	function addApplication(application) {
		dispatch({ type: 'ADD_APPLICATION', payload: application });
	}

	function removeApplication(id) {
		console.log('remove');
		dispatch({ type: 'REMOVE_APPLICATION', payload: id });
	}

	return (
		<ApplicationContext.Provider
			value={{ state, addApplication, removeApplication }}
		>
			{children}
		</ApplicationContext.Provider>
	);
}

export default ApplicationContextProvider;

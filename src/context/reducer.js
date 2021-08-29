function reducer(state, action) {
	if (action.type === 'ADD_APPLICATION') {
		return {
			...state,
			applications: [...state.applications, action.payload],
		};
	}
	if (action.type === 'REMOVE_APPLICATION') {
		return {
			...state,
			applications: state.applications.filter(
				(application) => application.id !== action.payload
			),
		};
	}
	return state;
}

export default reducer;

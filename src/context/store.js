const initialState = {
	applications: [
		{
			id: 1548734502,
			company: 'ikea',
			country: 'algeria',
			title: 'React developer',
			level: 'Entry Level',
			'listing on': 'linkedIn',
			'listing link': 'linkedin link',
			stage: {
				currentStage: 'Booked interview',
				date: '2021-11-22',
			},
		},
		{
			id: 1125817665,
			company: 'softhub',
			country: 'Germany',
			title: 'React developer',
			level: 'Entry Level',
			'listing on': 'linkedIn',
			'listing link': 'linkedin link',
			stage: {
				currentStage: 'No response',
				date: null,
			},
		},
	],
	isLoading: false,
};

export default initialState;

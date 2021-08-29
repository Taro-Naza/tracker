import React from 'react';
import StatsItem from './StatsItem';
import './StatsList.css';

function StatsList() {
	return (
		<div className='stats-list'>
			<StatsItem stat='13' message='tracked job applications' />
			<StatsItem stat='3' message='booked interviews' />
			<StatsItem stat='7' message='Applications with no response' />
			<StatsItem stat='3' message='applications in negotiation' />
		</div>
	);
}

export default StatsList;

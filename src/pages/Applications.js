import React from 'react';
import Header from '../components/Header';
import ApplicationsList from '../components/ApplicationsList';
import './Applications.css';

function Applications() {
	return (
		<div className='applications'>
			<Header className='applications--header' isDark={true} />
			<ApplicationsList />
		</div>
	);
}

export default Applications;

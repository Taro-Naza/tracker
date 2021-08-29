import React from 'react';
import AddApplicationForm from '../components/AddApplicationForm';
import Header from '../components/Header';
import './AddApplication.css';

function AddApplication() {
	return (
		<div className='add-application'>
			<Header isDark={true} />
			<div className='add-application--inner'>
				<AddApplicationForm />
			</div>
		</div>
	);
}

export default AddApplication;

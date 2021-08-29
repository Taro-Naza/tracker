import React, { useContext, useState } from 'react';
import FormElement from '../components/FormElement';
import Header from '../components/Header';
import { ApplicationContext } from '../context/ApplicationContext';
import './Edit.css';

function Edit({ id }) {
	const {
		state: { applications },
	} = useContext(ApplicationContext);
	// let [a] = applications.filter((application) => application.id === id);

	// const [text, setText] = useState({
	// 	company: a.company,
	// 	country: a.country,
	// 	title: a.title,
	// 	level: a.level,
	// 	'listing on': a['listing on'],
	// 	'listing link': a['listing link'],
	// 	stage: a.stage.currentStage,
	// 	date: a.stage.date,
	// });

	// function handleChange(event) {
	// 	setText({ ...text, [event.target.id]: event.target.value });
	// }

	function handleSubmit(event) {
		console.log('submit');
	}

	return (
		<div className='edit'>
			<Header isDark />
			<form
				className='form edit__form'
				// onSubmit={(event) => handleSubmit(event)}
			>
				<FormElement
					key={1}
					label='company'
					// value={a.company}
					// handleChange={handleChange}
				/>

				<FormElement
					key={2}
					label='country'
					// value={a.country}
					// handleChange={handleChange}
				/>

				<FormElement
					key={3}
					label='title'
					// value={a.title}
					// handleChange={handleChange}
				/>

				<FormElement
					key={4}
					label='level'
					// value={a.level}
					selection
					options={[
						'Position level',
						'Entry Level',
						'Mid-Senior',
						'Senior',
					]}
					// handleChange={handleChange}
				/>

				<FormElement
					key={5}
					label='stage'
					// value={a.stage}
					selection
					options={[
						'Stage',
						'No response',
						'Booked interview',
						'Negotiation',
						'Rejected',
					]}
					// handleChange={handleChange}
				/>
				{/* {a.stage === 'Booked interview' && (
				<FormElement
					key={6}
					type='date'
					label='date'
					// value={a.date}
					// handleChange={handleChange}
				/>
			)} */}

				<FormElement
					key={7}
					// value={a['listing on']}
					label='listing on'
					// handleChange={handleChange}
				/>

				<FormElement
					key={8}
					// value={a['listing link']}
					label='listing link'
					// handleChange={handleChange}
				/>

				<button type='submit' className='button form__button'>
					Add Application
				</button>
			</form>
		</div>
	);
}

export default Edit;

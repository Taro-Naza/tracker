import React, { useContext, useState } from 'react';
import { ApplicationContext } from '../context/ApplicationContext';
import './AddApplicationForm.css';
import FormElement from './FormElement';

function AddApplicationForm() {
	const { addApplication } = useContext(ApplicationContext);

	const [text, setText] = useState({
		company: '',
		country: '',
		title: '',
		level: '',
		'listing on': '',
		'listing link': '',
		stage: '',
		date: '',
	});

	function handleSubmit(event) {
		event.preventDefault();

		const application = {
			id: Math.round((new Date().getTime() / 1000) * Math.random()),
			company: text.company,
			country: text.country,
			title: text.title,
			level: text.level,
			'listing on': text['listing on'],
			'listing link': text['listing link'],
			stage: {
				currentStage: text.stage,
				date: text.date ? text.date : null,
			},
		};

		addApplication(application);

		setText({
			company: '',
			country: '',
			title: '',
			level: '',
			'listing on': '',
			'listing link': '',
			stage: '',
			date: '',
		});
	}

	function handleChange(event) {
		setText({ ...text, [event.target.id]: event.target.value });
	}

	return (
		<form
			className='form add-application--header'
			onSubmit={(event) => handleSubmit(event)}
		>
			<FormElement
				key={1}
				label='company'
				value={text.company}
				handleChange={handleChange}
			/>

			<FormElement
				key={2}
				label='country'
				value={text.country}
				handleChange={handleChange}
			/>

			<FormElement
				key={3}
				label='title'
				value={text.title}
				handleChange={handleChange}
			/>

			<FormElement
				key={4}
				label='level'
				value={text.level}
				selection
				options={[
					'Position level',
					'Entry Level',
					'Mid-Senior',
					'Senior',
				]}
				handleChange={handleChange}
			/>

			<FormElement
				key={5}
				label='stage'
				value={text.stage}
				selection
				options={[
					'Stage',
					'No response',
					'Booked interview',
					'Negotiation',
					'Rejected',
				]}
				handleChange={handleChange}
			/>
			{text.stage === 'Booked interview' && (
				<FormElement
					key={6}
					type='date'
					label='date'
					value={text.date}
					handleChange={handleChange}
				/>
			)}

			<FormElement
				key={7}
				value={text['listing on']}
				label='listing on'
				handleChange={handleChange}
			/>

			<FormElement
				key={8}
				value={text['listing link']}
				label='listing link'
				handleChange={handleChange}
			/>

			<button type='submit' className='button form__button'>
				Add Application
			</button>
		</form>
	);
}

export default AddApplicationForm;

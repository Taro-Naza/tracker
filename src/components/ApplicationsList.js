import React, { useContext } from 'react';
import { ApplicationContext } from '../context/ApplicationContext';
import ApplicationListItem from './ApplicationListItem';
import './ApplicationsList.css';

function ApplicationsList() {
	const {
		state: { applications },
		removeApplication,
	} = useContext(ApplicationContext);

	return (
		<div className='applications-List applications--inner'>
			<table className='applications-list__table'>
				<thead>
					<tr>
						<th className='application-list__header'>Company</th>
						<th className='application-list__header'>Country</th>
						<th className='application-list__header'>Job Title</th>
						<th className='application-list__header'>Level</th>
						<th className='application-list__header'>
							Job Listing
						</th>
						<th className='application-list__header'>Stage</th>
						<th className='application-list__header'>
							Delete / Edit
						</th>
					</tr>
				</thead>
				<tbody>
					{applications.map((a) => (
						<ApplicationListItem
							key={a.id}
							id={a.id}
							company={a.company}
							country={a.country}
							title={a.title}
							level={a.level}
							listing={a['listing on']}
							listingLink={a['listing link']}
							stage={a.stage}
							removeApplication={removeApplication}
						/>
					))}
				</tbody>
			</table>
		</div>
	);
}

export default ApplicationsList;

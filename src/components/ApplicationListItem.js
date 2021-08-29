import React from 'react';
import { useHistory } from 'react-router-dom';
import './ApplicationsListItem.css';

function ApplicationListItem({
	id,
	company,
	country,
	title,
	level,
	listing,
	listingLink,
	stage,
	removeApplication,
}) {
	let history = useHistory();
	return (
		<tr className='applications-list__item'>
			<td className='applications-list__cell .applications-list__cell--icon'>
				{company}
			</td>
			<td className='applications-list__cell'>{country}</td>
			<td className='applications-list__cell'>{title}</td>
			<td className='applications-list__cell'>{level}</td>
			<td className='applications-list__cell'>
				{listing} <a href={listingLink}>Here</a>
			</td>
			<td className='applications-list__cell'>{stage.currentStage}</td>
			<td className='applications-list__cell applications-list__cell--icons'>
				<i onClick={() => removeApplication(id)}>
					<svg
						className='applications-list__icon applications-list__icon--red '
						version='1.1'
						id='Capa_1'
						x='0px'
						y='0px'
						viewBox='0 0 511.76 511.76'
					>
						<g>
							<g>
								<path
									d='M436.896,74.869c-99.84-99.819-262.208-99.819-362.048,0c-99.797,99.819-99.797,262.229,0,362.048
        c49.92,49.899,115.477,74.837,181.035,74.837s131.093-24.939,181.013-74.837C536.715,337.099,536.715,174.688,436.896,74.869z
         M361.461,331.317c8.341,8.341,8.341,21.824,0,30.165c-4.16,4.16-9.621,6.251-15.083,6.251c-5.461,0-10.923-2.091-15.083-6.251
        l-75.413-75.435l-75.392,75.413c-4.181,4.16-9.643,6.251-15.083,6.251c-5.461,0-10.923-2.091-15.083-6.251
        c-8.341-8.341-8.341-21.845,0-30.165l75.392-75.413l-75.413-75.413c-8.341-8.341-8.341-21.845,0-30.165
        c8.32-8.341,21.824-8.341,30.165,0l75.413,75.413l75.413-75.413c8.341-8.341,21.824-8.341,30.165,0
        c8.341,8.32,8.341,21.824,0,30.165l-75.413,75.413L361.461,331.317z'
								/>
							</g>
						</g>
					</svg>
				</i>
				<i onClick={() => history.push('/edit')}>
					<svg
						className='applications-list__icon applications-list__icon--purple'
						version='1.1'
						id='Layer_1'
						x='0px'
						y='0px'
						viewBox='0 0 300 300'
					>
						<g>
							<g>
								<path
									d='M149.996,0C67.157,0,0.001,67.161,0.001,149.997S67.157,300,149.996,300s150.003-67.163,150.003-150.003
        S232.835,0,149.996,0z M221.302,107.945l-14.247,14.247l-29.001-28.999l-11.002,11.002l29.001,29.001l-71.132,71.126
        l-28.999-28.996L84.92,186.328l28.999,28.999l-7.088,7.088l-0.135-0.135c-0.786,1.294-2.064,2.238-3.582,2.575l-27.043,6.03
        c-0.405,0.091-0.817,0.135-1.224,0.135c-1.476,0-2.91-0.581-3.973-1.647c-1.364-1.359-1.932-3.322-1.512-5.203l6.027-27.035
        c0.34-1.517,1.286-2.798,2.578-3.582l-0.137-0.137L192.3,78.941c1.678-1.675,4.404-1.675,6.082,0.005l22.922,22.917
        C222.982,103.541,222.982,106.267,221.302,107.945z'
								/>
							</g>
						</g>
					</svg>
				</i>
			</td>
		</tr>
	);
}

export default ApplicationListItem;

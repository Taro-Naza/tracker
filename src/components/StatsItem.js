import React from 'react';
import './StatsItem.css';

function StatsItem({ stat, message }) {
	return (
		<div className='stats-list--inner'>
			<div className='stats-list__item'>
				<i>
					<svg
						className='stats-list__icon'
						version='1.1'
						id='Capa_1'
						x='px'
						y='0px'
						viewBox='0 0 256 256'
					>
						<g>
							<g>
								<polygon points='79.093,0 48.907,30.187 146.72,128 48.907,225.813 79.093,256 207.093,128 		' />
							</g>
						</g>
					</svg>
				</i>
				<p className='stats-list__item-text'>
					You have <span className='stats-list__display'>{stat}</span>{' '}
					{message}
				</p>
			</div>
		</div>
	);
}

export default StatsItem;

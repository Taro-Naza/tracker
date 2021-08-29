import React, { useState } from 'react';
import FormElement from '../components/FormElement';
import Header from '../components/Header';
import './Filters.css';

function Filters() {
	const [text, setText] = useState({ 'sort by': '' });
	function handleChange() {
		setText('');
	}

	return (
		<div className='filters'>
			<Header isDark />
			<div className='filters__input filters--input'>
				<FormElement
					selection
					value={text}
					label='sort by'
					options={[
						'Choose a filter option',
						'By Company',
						'By Country',
						'By Title',
						'By Level',
						'By Stage',
					]}
					handleChange={handleChange}
				/>
			</div>
			<div className='filters__illustration'>
				<svg
					width='434.368'
					height='302.349'
					viewBox='0 0 434.368 302.349'
				>
					<g id='undraw_Search_re_x5gq' transform='translate(0 0)'>
						<path
							id='Path_242'
							data-name='Path 242'
							d='M692.7,284.772H298.769a20.24,20.24,0,0,1-20.217-20.217v-18.38a20.24,20.24,0,0,1,20.217-20.217H692.7a20.24,20.24,0,0,1,20.217,20.217v18.379A20.24,20.24,0,0,1,692.7,284.772ZM298.769,227.182a19.014,19.014,0,0,0-18.992,18.992v18.379a19.014,19.014,0,0,0,18.992,18.992H692.7a19.014,19.014,0,0,0,18.992-18.992v-18.38A19.014,19.014,0,0,0,692.7,227.182Z'
							transform='translate(-278.552 -225.957)'
							fill='#3f3d56'
						/>
						<rect
							id='Rectangle_724'
							data-name='Rectangle 724'
							width='284.882'
							height='23.281'
							rx='11.64'
							transform='translate(38.597 17.767)'
							fill='#e6e6e6'
						/>
						<rect
							id='Rectangle_725'
							data-name='Rectangle 725'
							width='284.882'
							height='23.281'
							rx='11.64'
							transform='translate(72.905 119.86)'
							fill='#910bea'
						/>
						<rect
							id='Rectangle_726'
							data-name='Rectangle 726'
							width='284.882'
							height='23.281'
							rx='11.64'
							transform='translate(72.905 193.881)'
							fill='#e6e6e6'
						/>
						<rect
							id='Rectangle_727'
							data-name='Rectangle 727'
							width='284.882'
							height='23.281'
							rx='11.64'
							transform='translate(72.905 267.902)'
							fill='#e6e6e6'
						/>
						<path
							id='Path_243'
							data-name='Path 243'
							d='M858.458,283.375a1.833,1.833,0,0,1-2.553.45l-10-6.96a1.833,1.833,0,0,1,2.1-3l10,6.96A1.833,1.833,0,0,1,858.458,283.375Z'
							transform='translate(-462.383 -241.393)'
							fill='#910bea'
						/>
						<path
							id='Path_244'
							data-name='Path 244'
							d='M836.681,266.561a13.015,13.015,0,1,1-3.2-18.127A13.016,13.016,0,0,1,836.681,266.561ZM818.023,253.5a9.761,9.761,0,1,0,13.595-2.4,9.761,9.761,0,0,0-13.595,2.4Z'
							transform='translate(-451.963 -232.486)'
							fill='#910bea'
						/>
						<path
							id='Path_245'
							data-name='Path 245'
							d='M696.229,453.7H324.963a.613.613,0,1,1,0-1.225H696.229a.613.613,0,1,1,0,1.225Z'
							transform='translate(-293.411 -299.455)'
							fill='#3f3d56'
						/>
						<path
							id='Path_246'
							data-name='Path 246'
							d='M696.229,563.32H324.963a.613.613,0,0,1,0-1.225H696.229a.613.613,0,0,1,0,1.225Z'
							transform='translate(-293.411 -335.023)'
							fill='#3f3d56'
						/>
						<path
							id='Path_247'
							data-name='Path 247'
							d='M696.229,672.938H324.963a.613.613,0,0,1,0-1.225H696.229a.613.613,0,0,1,0,1.225Z'
							transform='translate(-293.411 -370.59)'
							fill='#3f3d56'
						/>
					</g>
				</svg>
			</div>
		</div>
	);
}

export default Filters;

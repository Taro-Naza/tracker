import React from 'react';
import './FormElement.css';

function FormElement({ type, label, value, selection, options, handleChange }) {
	return (
		<div className='form__element'>
			<label htmlFor={label} className='form__label'>
				{label}
			</label>
			{selection ? (
				<select
					value={value}
					id={label}
					className='form__input'
					onChange={handleChange}
					required
				>
					{options.map((option, i) => {
						if (i > 0) {
							return (
								<option key={i} value={option}>
									{option}
								</option>
							);
						}
						return (
							<option key={i} value=''>
								{option}
							</option>
						);
					})}
				</select>
			) : (
				<input
					type={type}
					className='form__input'
					id={label}
					value={value}
					onChange={handleChange}
					required
				/>
			)}
		</div>
	);
}

export default FormElement;

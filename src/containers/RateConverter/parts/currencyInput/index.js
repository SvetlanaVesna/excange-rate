import React from 'react'

export default ({
	error,
	setValueToConvert,
	valueToConvert,
	sourceCurrency,
}) => (
	<aside className="aside aside-1">
		<span>
			<input
				className={`convert_value_input${error ? ' input_error' : ''}`}
				placeholder="Input to convert"
				onChange={e => setValueToConvert(e.target.value)}
				value={valueToConvert}
			/>
		</span>
		<div>{sourceCurrency}</div>

		{error && <div className="input_error_label">{error}</div>}
	</aside>
)

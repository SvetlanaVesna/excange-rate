import React from 'react'

import './style.css'

const RateConverter = ({
	availableRates,
	sourceCurrency,
	targetCurrency,
	valueToConvert,
	setValueToConvert,
	selectCurrency,
	resultValue,
	ratePollStopAction,
}) => (
	<div className="wrapper">
		<header className="header" onClick={() => ratePollStopAction()}>
			Header
		</header>
		<aside className="aside aside-1">
			<input
				className="convert_value_input"
				placeholder="Input to convert"
				onChange={e => setValueToConvert(e.target.value)}
			/>
			<label>
				<select
					className="rate_select"
					onChange={e => selectCurrency('source', e.target.value)}
				>
					{availableRates.map(rate => (
						<option key={rate} selected={rate === sourceCurrency}>
							{rate}{' '}
						</option>
					))}
				</select>
			</label>
		</aside>
		<article className="main">{resultValue}</article>
		<aside className="aside aside-2">
			<label>
				<select
					className="rate_select"
					onChange={e => selectCurrency('target', e.target.value)}
				>
					{availableRates.map(rate => (
						<option key={rate} selected={rate === targetCurrency}>
							{rate}{' '}
						</option>
					))}
				</select>
			</label>
		</aside>
	</div>
)

export default RateConverter

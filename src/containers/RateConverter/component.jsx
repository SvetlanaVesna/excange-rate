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
	currentSelectedRate,
	parseError,
}) => (
	<div className="wrapper">
		<header className="header" onClick={() => ratePollStopAction()}>
			<div>
				1 {sourceCurrency} = {currentSelectedRate} {targetCurrency}
			</div>
			<div>
				1 {targetCurrency} = {1 / currentSelectedRate} {sourceCurrency}
			</div>
		</header>
		<aside className="aside aside-1">
			<input
				className={`${parseError ? 'input_error' : ''} convert_value_input`}
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
			{parseError && (
				<div className="input_error_label">Please, enter valid sum</div>
			)}
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

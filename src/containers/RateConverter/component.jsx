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
	convertIndex,
	parseError,
}) => (
	<div className="wrapper">
		<header className="header" onClick={() => ratePollStopAction()}>
			Exchange Currencies
		</header>
		<aside className="aside aside-1">
			<input
				className={`convert_value_input${parseError ? ' input_error' : ''}`}
				placeholder="Input to convert"
				onChange={e => setValueToConvert(e.target.value)}
			/>

			<label>
				<select
					className="source_rate_select rate_select"
					onChange={e => selectCurrency('source', e.target.value)}
					value={sourceCurrency}
				>
					{availableRates.map(rate => (
						<option key={rate}>{rate} </option>
					))}
				</select>
			</label>
			{parseError && (
				<div className="input_error_label">Please, enter valid sum</div>
			)}
		</aside>
		<aside className="aside aside-2">
			<input
				className="convert_value_output"
				value={resultValue}
				disabled={true}
			/>
			<label>
				<select
					className="target_rate_select rate_select"
					onChange={e => selectCurrency('target', e.target.value)}
					value={targetCurrency}
				>
					{availableRates.map(rate => (
						<option key={rate}>{rate} </option>
					))}
				</select>
			</label>
		</aside>
		<footer className="footer">
			<div>
				1 {sourceCurrency} = {convertIndex} {targetCurrency}
			</div>
			<div>
				1 {targetCurrency} = {1 / convertIndex} {sourceCurrency}
			</div>
		</footer>
	</div>
)

export default RateConverter

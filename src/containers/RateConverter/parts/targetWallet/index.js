import React from 'react'

const TargetWallet = ({
	resultValue,
	selectWallet,
	targetCurrency,
	userWallets,
	exchange,
	error,
}) => (
	<aside className="aside aside-2">
		<span>
			<input
				className="convert_value_output"
				value={resultValue}
				disabled={true}
			/>
		</span>
		<span>
			<label>
				<select
					className="target_rate_select rate_select"
					onChange={e => selectWallet('target', e.target.value)}
					value={targetCurrency}
				>
					{Object.keys(userWallets).map(key => (
						<option key={key} value={key}>
							{key}
						</option>
					))}
				</select>
			</label>
		</span>
		<span>
			<button
				className="rate_exchange"
				onClick={() => exchange()}
				disabled={error}
			>
				Exchange
			</button>
		</span>
	</aside>
)
export default TargetWallet

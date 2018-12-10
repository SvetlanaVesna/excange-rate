import React from 'react'

import './style.css'

const AddWallet = ({
	isFetching,
	userWallets,
	allRates,
	rate,
	setRate,

	addWallet,
}) => (
	<div className="wrapper">
		{isFetching && <h1>LOADING...</h1>}
		<aside className="aside aside-1">
			<span>select currency: </span>
			<span>
				<label>
					<select
						className="source_rate_select rate_select"
						onChange={e => setRate(e.target.value)}
						value={rate}
					>
						{Object.keys(allRates).map(
							key =>
								!Object.keys(userWallets).includes(key) && (
									<option key={key} value={key}>
										{allRates[key].content} {key}{' '}
									</option>
								),
						)}
					</select>
				</label>
			</span>
			<span>
				{' '}
				<button
					className="rate_add"
					onClick={() => addWallet()}
					disabled={rate === ''}
				>
					Add to wallet
				</button>
			</span>
		</aside>
	</div>
)

export default AddWallet

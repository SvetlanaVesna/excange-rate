import React from 'react'

const WalletSelection = ({ selectWallet, selectedWallet, userWallets }) => (
	<aside className="aside aside-1">
		<span>select wallet</span>
		<span>
			<label>
				<select
					className="source_rate_select rate_select"
					onChange={e => selectWallet('source', e.target.value)}
					value={selectedWallet.currency}
				>
					{Object.keys(userWallets).map(key => (
						<option key={key} value={key}>
							{userWallets[key].content} {key}{' '}
						</option>
					))}
				</select>
			</label>
		</span>
	</aside>
)
export default WalletSelection

import React from 'react'

export default ({
	selectedWallet,
	sourceCurrency,
	targetUserWallet,
	targetCurrency,
}) => (
	<footer className="footer">
		<aside className="aside">You have:</aside>
		<aside className="aside aside-1">
			{selectedWallet.content} {sourceCurrency}
		</aside>
		<aside className="aside aside-2">
			{targetUserWallet.content} {targetCurrency}
		</aside>
	</footer>
)

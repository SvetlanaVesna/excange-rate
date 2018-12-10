import React from 'react'

import Footer from './parts/footer'
import Header from './parts/header'

import WalletSelectionComponent from './parts/walletSelection'
import CurrencyInputComponent from './parts/currencyInput'
import TargetWalletComponent from './parts/targetWallet'

import './style.css'

const RateConverter = ({
	isFetching,

	sourceCurrency,
	targetCurrency,

	valueToConvert,
	setValueToConvert,

	resultValue,
	convertIndex,
	error,

	userWallets,
	selectedWallet,
	targetUserWallet,

	selectWallet,
	exchange,

	ratePollStopAction,
}) => (
	<div className="wrapper">
		<Header ratePollStopAction={ratePollStopAction} />
		<WalletSelectionComponent
			selectWallet={selectWallet}
			selectedWallet={selectedWallet}
			userWallets={userWallets}
		/>
		{isFetching && <h1>LOADING...</h1>}
		<CurrencyInputComponent
			error={error}
			setValueToConvert={setValueToConvert}
			valueToConvert={valueToConvert}
			sourceCurrency={sourceCurrency}
		/>
		{!isFetching && (
			<TargetWalletComponent
				resultValue={resultValue}
				selectWallet={selectWallet}
				targetCurrency={targetCurrency}
				userWallets={userWallets}
				exchange={exchange}
				error={error}
			/>
		)}
		{!isFetching && (
			<Footer
				selectedWallet={selectedWallet}
				sourceCurrency={sourceCurrency}
				targetUserWallet={targetUserWallet}
				targetCurrency={targetCurrency}
			/>
		)}
		<div>
			<div>
				1 {sourceCurrency} = {convertIndex} {targetCurrency}
			</div>
			<div>
				1 {targetCurrency} = {1 / convertIndex} {sourceCurrency}
			</div>
		</div>
	</div>
)

export default RateConverter

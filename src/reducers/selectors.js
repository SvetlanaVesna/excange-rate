import { createSelector } from 'reselect'

export const getSelectedSourceCurrency = ({ selection }) => selection.source

export const getSelectedTargetCurrency = ({ selection }) => selection.target

export const isRatesFetching = ({ rates: { isFetching } }) => isFetching

export const getAvailableRates = ({ rates: { availableRates } }) =>
	availableRates

export const getAllRates = ({ rates }) => rates.rates

export const getCurrenciesRelation = createSelector(
	getSelectedSourceCurrency,
	getSelectedTargetCurrency,
	getAllRates,
	(source, target, list) =>
		list[target] && list[source] ? list[target] / list[source] : 1,
)
export const userWalletCurrency = ({ wallet }) => wallet.currency

export const userWalletContent = ({ wallet }) => wallet.content

export const getTargetUserWallet = createSelector(
	getSelectedTargetCurrency,
	getAllRates,
	userWalletCurrency,
	userWalletContent,
	(targetRate, rateList, userWalletCurrency, walletContent) =>
		rateList[targetRate]
			? (walletContent * rateList[targetRate]) / rateList[userWalletCurrency]
			: 1,
)
export const getSourceUserWallet = createSelector(
	getSelectedSourceCurrency,
	getAllRates,
	userWalletCurrency,
	userWalletContent,
	(sourceRate, rateList, userWalletCurrency, walletContent) =>
		rateList[sourceRate]
			? (walletContent * rateList[sourceRate]) / rateList[userWalletCurrency]
			: 1,
)

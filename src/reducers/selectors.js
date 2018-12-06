import { createSelector } from 'reselect'

export const getAllUserWallets = ({ wallet }) => wallet.allWallets
export const getSourceUserWalletKey = ({ wallet }) => wallet.source
export const getTargetUserWalletKey = ({ wallet }) => wallet.target

export const getSourceUserWallet = createSelector(
	getAllUserWallets,
	getSourceUserWalletKey,
	(list, key) => (key !== '' ? list[key] : { currency: '', content: 0 }),
)
export const getTargetUserWallet = createSelector(
	getAllUserWallets,
	getTargetUserWalletKey,
	(list, key) => (key !== '' ? list[key] : { currency: '', content: 0 }),
)
export const getSelectedSourceCurrency = createSelector(
	getSourceUserWallet,
	wallet => wallet.currency,
)
export const getSelectedTargetCurrency = createSelector(
	getTargetUserWallet,
	wallet => wallet.currency,
)

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

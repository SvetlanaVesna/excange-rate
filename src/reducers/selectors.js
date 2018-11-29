import { createSelector } from 'reselect'

export const getSelectedSourceCurrency = ({ selection }) => selection.source

export const getSelectedTargetCurrency = ({ selection }) => selection.target

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
export const getTargetCurrencyRate = createSelector(
	getSelectedTargetCurrency,
	getAllRates,
	(target, list) => (list[target] ? list[target] : 1),
)

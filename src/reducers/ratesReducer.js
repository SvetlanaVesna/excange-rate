import { createReducer } from './utils/ReducersUtils'

import { GET_RATE, SUCCESS, FAIL } from '../constants/actionTypes'

const initialState = {
	base: '',
	availableRates: ['GBP', 'EUR', 'USD'],
	rates: {
		EUR: 0.879981,
		GBP: 0.782398,
		USD: 1,
	},
	isFetching: false,
}
const setRates = (state, { response: { base, rates } }) => ({
	...state,
	base,
	rates,
	isFetching: false,
})
const setRatesError = () => initialState

export default createReducer(initialState, {
	[GET_RATE + SUCCESS]: setRates,
	[GET_RATE + FAIL]: setRatesError,
})

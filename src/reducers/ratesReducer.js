import { createReducer } from './utils/ReducersUtils'

import { GET_RATE, SUCCESS, FAIL, START } from '../constants/actionTypes'

const initialState = {
	base: '',
	availableRates: ['GBP', 'EUR', 'USD'],
	rates: {},
	isFetching: false,
}
const setFetch = state => ({ ...state, isFetching: true })

const setRates = (state, { response: { base, rates } }) => ({
	...state,
	base,
	rates,
	isFetching: false,
})
const setRatesError = () => initialState

export default createReducer(initialState, {
	[GET_RATE + START]: setFetch,
	[GET_RATE + SUCCESS]: setRates,
	[GET_RATE + FAIL]: setRatesError,
})

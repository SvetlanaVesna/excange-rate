import { createReducer } from './utils/ReducersUtils'

import { SELECT_CURRENCY } from '../constants/actionTypes'

const initialState = {
	source: 'GBP',
	target: 'EUR',
}

const setSelectedCurrency = (state, { direction, currency }) => ({
	...state,
	[direction]: currency,
})

export default createReducer(initialState, {
	[SELECT_CURRENCY]: setSelectedCurrency,
})

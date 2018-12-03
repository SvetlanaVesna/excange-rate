import rateReducer from './ratesReducer'

import { getRateData } from '../actions'

import { FAIL, SUCCESS } from '../constants/actionTypes'

test('ratesReducer should set rates after success getting of it', () => {
	const baseState = rateReducer(undefined, { type: '@@INIT' })

	const mockedData = { base: 'USD', rates: { USD: 1, EUR: 1.3 } }

	const newState = rateReducer(baseState, getRateData(SUCCESS)(mockedData))

	expect(newState).toMatchObject({
		base: 'USD',
		availableRates: ['GBP', 'EUR', 'USD'],
		rates: { USD: 1, EUR: 1.3 },
		isFetching: false,
	})
})
test('ratesReducer should unset rates after failing getting of it', () => {
	const baseState = rateReducer(undefined, { type: '@@INIT' })

	const mockedData = { error: { message: '', code: 500 } }

	const newState = rateReducer(baseState, getRateData(FAIL)(mockedData))

	expect(newState).toMatchObject(baseState)
})

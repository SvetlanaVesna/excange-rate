import configureMockStore from 'redux-mock-store'

import { createEpicMiddleware } from 'redux-observable'

import * as actions from './index'
import * as types from '../constants/actionTypes'

import { rates } from '../mock'

const middlewares = [createEpicMiddleware()]
const mockStore = configureMockStore(middlewares)

describe('actions', () => {
	it('should create an action to start poll', () => {
		const expectedActions = [{ type: types.RATE_POLL + types.START }]
		const store = mockStore({
			selection: { source: '', target: '' },
			rates: {
				availableRates: ['GBP', 'EUR', 'USD'],
				base: 'USD',
				isFetching: false,
				rates: rates,
			},
			errors: [],
		})
		store.dispatch({ type: types.RATE_POLL + types.START })
		expect(store.getActions()).toEqual(expectedActions)
	})
})

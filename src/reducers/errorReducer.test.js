import errorReducer from './errorReducer'

import { getRateData } from '../actions'

import { FAIL } from '../constants/actionTypes'

test('errorReducer should set error after failing error action', () => {
	const baseState = errorReducer(undefined, { type: '@@INIT' })

	const mockedData = {
		description: undefined,
		error: { code: 500, message: '' },
		key: Date(),
		message: undefined,
	}

	const newState = errorReducer(baseState, getRateData(FAIL)(mockedData))

	expect(newState).toMatchObject([mockedData])
})

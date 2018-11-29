import { createReducer } from './utils/ReducersUtils'

import { GET_RATE, FAIL, CLEAR_ERRORS } from '../constants/actionTypes'

const initialState = []

const setError = (state, { response: { description, error, message } }) =>
	state.length < 10
		? [
				...state,
				{
					description,
					error,
					message,
					key: Date(),
				},
		  ]
		: [
				{
					description,
					error,
					message,
					key: Date(),
				},
		  ]

const clearErrors = () => initialState

export default createReducer(initialState, {
	[GET_RATE + FAIL]: setError,
	[CLEAR_ERRORS]: clearErrors,
})

import { combineReducers } from 'redux'

import selection from './selectionReducer'
import rates from './ratesReducer'
import errors from './errorReducer'

export default combineReducers({
	rates,
	selection,
	errors,
})

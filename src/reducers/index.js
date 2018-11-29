import { combineReducers } from 'redux'

import selection from './selectionReducer'
import rates from './ratesReducer'

export default combineReducers({
	rates,
	selection,
})

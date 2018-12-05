import { combineReducers } from 'redux'

import selection from './selectionReducer'
import rates from './ratesReducer'
import errors from './errorReducer'
import wallet from './userWalletReducer'

export default combineReducers({
	rates,
	selection,
	errors,
	wallet,
})

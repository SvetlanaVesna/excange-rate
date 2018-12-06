import { combineReducers } from 'redux'

import rates from './ratesReducer'
import errors from './errorReducer'
import wallet from './userWalletReducer'

export default combineReducers({
	rates,
	errors,
	wallet,
})

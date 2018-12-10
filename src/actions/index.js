import {
	SELECT_WALLET,
	ADD_WALLETS,
	EXCHANGE,
	RATE_POLL,
	GET_RATE,
	START,
	STOP,
	CLEAR_ERRORS,
} from '../constants/actionTypes'

/**
 * Rate polling actions
 */
export const ratePollStartAction = () => ({ type: RATE_POLL + START })
export const ratePollStopAction = () => ({ type: RATE_POLL + STOP })

export const getRateStartAction = () => ({ type: GET_RATE + START })
/**
 * Fetch rate data from openexchangerates.org
 * @param status
 * @returns {function(*): {type: string, response: *}}
 */
export const getRateData = status => response => ({
	type: GET_RATE + status,
	response,
})

/**
 * Select source or target wallet
 * @param direction
 * @param wallet
 * @returns {{type: string, direction: string, wallet: string}}
 */

export const selectWallet = (direction, wallet) => ({
	type: SELECT_WALLET,
	wallet,
	direction,
})

export const exchange = (sourceSum, targetSum) => ({
	type: EXCHANGE,
	sourceSum: Number.parseFloat(sourceSum),
	targetSum,
})

export const clearErrors = () => ({
	type: CLEAR_ERRORS,
})

export const addWallet = currency => ({
	type: ADD_WALLETS,
	currency,
})

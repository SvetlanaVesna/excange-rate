import {
	SELECT_CURRENCY,
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
 * Select source or target currency
 * @param direction
 * @param currency
 * @returns {{type: string, direction: string, currency: string}}
 */
export const selectCurrency = (direction, currency) => ({
	type: SELECT_CURRENCY,
	direction,
	currency,
})

export const clearErrors = () => ({
	type: CLEAR_ERRORS,
})

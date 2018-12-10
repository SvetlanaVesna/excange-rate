import { createReducer } from './utils/ReducersUtils'

import { SELECT_WALLET, ADD_WALLETS, EXCHANGE } from '../constants/actionTypes'

const initialState = {
	allWallets: {
		USD: {
			content: 58,
			currency: 'USD',
		},
		EUR: {
			content: 0,
			currency: 'EUR',
		},
		GBP: {
			content: 2,
			currency: 'GBP',
		},
	},
	source: 'GBP',
	target: 'EUR',
	amount: {
		currency: 'USD',
		sum: 60.5651384,
	},
}
const selectWallet = (state, { wallet, direction }) => ({
	...state,
	[direction]: wallet,
})
const exchangeBetweenWallets = (state, { sourceSum, targetSum }) => {
	const sourceWallet = {
		...state.allWallets[state.source],
		content: state.allWallets[state.source].content - sourceSum,
	}
	const targetWallet = {
		...state.allWallets[state.target],
		content: state.allWallets[state.target].content + targetSum,
	}
	return {
		...state,
		allWallets: {
			...state.allWallets,
			[state.source]: sourceWallet,
			[state.target]: targetWallet,
		},
	}
}
const addWallet = (state, { currency }) => ({
	...state,
	allWallets: { ...state.allWallets, [currency]: { content: 0, currency } },
})

export default createReducer(initialState, {
	[SELECT_WALLET]: selectWallet,
	[EXCHANGE]: exchangeBetweenWallets,
	[ADD_WALLETS]: addWallet,
})

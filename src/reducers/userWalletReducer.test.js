import userWalletReducer from './userWalletReducer'

import { selectWallet, exchange } from '../actions'

test('userWallet should select', () => {
	const baseState = userWalletReducer(undefined, { type: '@@INIT' })

	const newState = userWalletReducer(baseState, selectWallet('source', 'RUR'))

	expect(newState).toMatchObject({
		source: 'RUR',
	})

	const newState2 = userWalletReducer(newState, selectWallet('target', 'EUR'))

	expect(newState2).toMatchObject({
		source: 'RUR',
		target: 'EUR',
	})
})
test('userWallet should exchange', () => {
	const baseState = userWalletReducer(undefined, { type: '@@INIT' })

	const newState = userWalletReducer(baseState, exchange(2, 2.228))
	console.log(baseState)

	expect(newState).toMatchObject({
		allWallets: {
			USD: { content: 58, currency: 'USD' },
			EUR: { content: 2.228, currency: 'EUR' },
			GBP: { content: 0, currency: 'GBP' },
		},
		source: 'GBP',
		target: 'EUR',
		amount: { currency: 'USD', sum: 60.5651384 },
	})
})

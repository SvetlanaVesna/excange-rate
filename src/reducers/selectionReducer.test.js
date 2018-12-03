import selectionReducer from './selectionReducer'

import { selectCurrency } from '../actions'

test('selectionReducer should select currency for type', () => {
	const baseState = selectionReducer(undefined, { type: '@@INIT' })

	const newState = selectionReducer(baseState, selectCurrency('source', 'RUR'))

	expect(newState).toMatchObject({
		source: 'RUR',
	})

	const newState2 = selectionReducer(newState, selectCurrency('target', 'EUR'))

	expect(newState2).toMatchObject({
		source: 'RUR',
		target: 'EUR',
	})
})

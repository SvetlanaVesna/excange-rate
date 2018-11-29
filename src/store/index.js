import { createStore, applyMiddleware } from 'redux'

import { createEpicMiddleware } from 'redux-observable'
import { createLogger } from 'redux-logger'
import { composeWithDevTools } from 'redux-devtools-extension'

import rootReducer from '../reducers'
import rootEpic from '../epics'

const epicMiddleware = createEpicMiddleware()

const createStoreWithMiddleware = composeWithDevTools(
	applyMiddleware(epicMiddleware, createLogger()),
)(createStore)

export function configureStore(initialState) {
	const store = createStoreWithMiddleware(rootReducer, initialState)

	epicMiddleware.run(rootEpic)

	if (module.hot) {
		module.hot.accept('../epics', () => {
			// eslint-disable-next-line
			const rootEpicNext = require('../epics').default
			epicMiddleware.replaceEpic(rootEpicNext)
		})

		module.hot.accept('../reducers', () => {
			// eslint-disable-next-line
			const nextRootReducer = require('../reducers').default
			store.replaceReducer(nextRootReducer)
		})
	}

	return store
}

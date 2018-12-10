import React from 'react'
import { connect } from 'react-redux'

import {
	compose,
	withStateHandlers,
	withHandlers,
	lifecycle,
	withProps,
} from 'recompose'

import * as select from '../../reducers/selectors'

import {
	ratePollStartAction,
	ratePollStopAction,
	selectWallet,
	exchange,
} from '../../actions'

import { formatter, checkInputValue } from '../../utils'

import RateConvertComponent from './component'

const RateConvertContainer = compose(
	connect(
		state => ({
			sourceCurrency: select.getSelectedSourceCurrency(state),
			targetCurrency: select.getSelectedTargetCurrency(state),
			convertIndex: select.getCurrenciesRelation(state),
			isFetching: select.isRatesFetching(state),
			userWallets: select.getAllUserWallets(state),
			selectedWallet: select.getSourceUserWallet(state),
			targetUserWallet: select.getTargetUserWallet(state),
		}),
		dispatch => ({ dispatch }),
	),
	withStateHandlers(
		() => ({
			valueToConvert: '',
			error: false,
		}),
		{
			setStateValue: () => val => val,
		},
	),
	withProps(({ valueToConvert, convertIndex, targetCurrency }) => ({
		resultValue: formatter(targetCurrency, valueToConvert * convertIndex),
	})),
	withHandlers({
		setValueToConvert: ({
			setStateValue,
			selectedWallet: { content },
		}) => val => setStateValue(checkInputValue(content, val)),

		ratePollStopAction: ({ dispatch }) => () => dispatch(ratePollStopAction()),

		selectWallet: ({
			dispatch,
			userWallets,
			valueToConvert,
			setStateValue,
		}) => (direction, wallet) => {
			dispatch(selectWallet(direction, wallet))
			const hasError = checkInputValue(
				userWallets[wallet].content,
				valueToConvert,
			)
			setStateValue(hasError)
		},

		exchange: ({
			dispatch,
			valueToConvert,
			resultValue,
			selectedWallet: { content },
			setStateValue,
		}) => () => {
			const hasError = checkInputValue(content, valueToConvert)
			if (!hasError.error) dispatch(exchange(valueToConvert, resultValue))
			else setStateValue(hasError)
		},
	}),
	lifecycle({
		componentDidMount() {
			const { dispatch } = this.props
			dispatch(ratePollStartAction())
		},
	}),
)(RateConvertComponent)

const RateConvert = () => <RateConvertContainer />

export default RateConvert

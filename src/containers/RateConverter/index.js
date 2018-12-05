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
	selectCurrency,
	ratePollStartAction,
	ratePollStopAction,
} from '../../actions'

import { isNotNumber, formatter, clearField } from '../../utils'

import RateConvertComponent from './component'

const RateConvertContainer = compose(
	connect(
		state => ({
			sourceCurrency: select.getSelectedSourceCurrency(state),
			targetCurrency: select.getSelectedTargetCurrency(state),
			availableRates: select.getAvailableRates(state),
			convertIndex: select.getCurrenciesRelation(state),
			isFetching: select.isRatesFetching(state),
			sourceUserWallet: select.getSourceUserWallet(state),
			targetUserWallet: select.getTargetUserWallet(state),
		}),
		dispatch => ({ dispatch }),
	),
	withStateHandlers(
		() => ({
			valueToConvert: '',
		}),
		{
			setValueToConvert: () => val => ({ valueToConvert: clearField(val) }),
		},
	),
	withHandlers({
		selectCurrency: ({ dispatch }) => (direction, currency) =>
			dispatch(selectCurrency(direction, currency)),
		ratePollStopAction: ({ dispatch }) => () => dispatch(ratePollStopAction()),
	}),
	withProps(({ valueToConvert, convertIndex, targetCurrency }) => ({
		resultValue: isNotNumber(valueToConvert)
			? 0
			: formatter(targetCurrency, valueToConvert * convertIndex),
		parseError: isNotNumber(valueToConvert),
	})),
	lifecycle({
		componentDidMount() {
			const { dispatch } = this.props
			dispatch(ratePollStartAction())
		},
	}),
)(RateConvertComponent)

const RateConvert = () => <RateConvertContainer />

export default RateConvert

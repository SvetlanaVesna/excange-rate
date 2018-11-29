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

import { isNotNumber } from '../../utils'

import RateConvertComponent from './component'

const RateConvertContainer = compose(
	connect(
		state => ({
			sourceCurrency: select.getSelectedSourceCurrency(state),
			targetCurrency: select.getSelectedTargetCurrency(state),
			availableRates: select.getAvailableRates(state),
			convertIndex: select.getCurrenciesRelation(state),
			currentSelectedRate: select.getTargetCurrencyRate(state),
		}),
		dispatch => ({ dispatch }),
	),
	withStateHandlers(
		() => ({
			valueToConvert: '',
		}),
		{
			setValueToConvert: () => val => ({ valueToConvert: val }),
		},
	),
	withHandlers({
		selectCurrency: ({ dispatch }) => (direction, currency) =>
			dispatch(selectCurrency(direction, currency)),
		ratePollStopAction: ({ dispatch }) => () => dispatch(ratePollStopAction()),
	}),
	lifecycle({
		componentDidMount() {
			const { dispatch } = this.props
			dispatch(ratePollStartAction())
		},
		componentWillUnmount() {
			const { dispatch } = this.props
			dispatch(ratePollStopAction())
		},
	}),
	withProps(({ valueToConvert, convertIndex }) => ({
		resultValue: isNotNumber(valueToConvert)? 0: valueToConvert * convertIndex,
		parseError: isNotNumber(valueToConvert),
	})),
)(RateConvertComponent)

const RateConvert = () => <RateConvertContainer />

export default RateConvert

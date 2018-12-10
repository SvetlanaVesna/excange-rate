import React from 'react'
import { connect } from 'react-redux'

import { compose, withHandlers, withStateHandlers } from 'recompose'

import * as select from '../../reducers/selectors'

import { addWallet } from '../../actions'

import AddWalletComponent from './component'
import { getAllUserWallets } from '../../reducers/selectors'

const AddWalletContainer = compose(
	connect(
		state => ({
			allRates: select.getAllRates(state),
			isFetching: select.isRatesFetching(state),
			userWallets: getAllUserWallets(state),
		}),
		dispatch => ({ dispatch }),
	),
	withStateHandlers(
		() => ({
			rate: '',
		}),
		{
			setRate: () => val => ({ rate: val }),
		},
	),
	withHandlers({
		addWallet: ({ dispatch, rate }) => () => dispatch(addWallet(rate)),
	}),
)(AddWalletComponent)

const AddWallet = () => <AddWalletContainer />

export default AddWallet

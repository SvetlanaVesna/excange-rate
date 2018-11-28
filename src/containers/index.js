import React from 'react';
import { connect } from 'react-redux';

import { compose, withStateHandlers, withHandlers } from 'recompose';

import * as select from '../reducers/selectors';

import { selectCurrency } from '../actions';

import RateConvertComponent from './component';

const RateConvertContainer = compose(
  connect(
    state => ({
      sourceCurrency: select.getSelectedSourceCurrency(state),
      targetCurrency: select.getSelectedTargetCurrency(state)
    }),
    dispatch => ({ dispatch })
  ),
  withStateHandlers(
    () => ({
      valueToConvert: ''
    }),
    {
      setValueToConvert: () => val => ({ valueToConvert: val.trim() })
    }
  ),
  withHandlers({
    selectCurrency: ({ dispatch }) => (direction, currency) =>
      dispatch(selectCurrency(direction, currency))
  })
)(RateConvertComponent);

const RateConvert = () => <RateConvertContainer />;

export default RateConvert;

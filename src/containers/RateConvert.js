import React, { Component } from 'react';
import {connect} from 'react-redux';

import {ratePollStopAction, ratePollStartAction} from '../actions';

class RateConvertComponent extends Component {
  componentDidMount(){
    const {ratePollStartAction} = this.props;
    ratePollStartAction();
  }
  componentWillUnmount(){
    const {ratePollStopAction} = this.props;
    ratePollStopAction();
  }
  render() {
    return (
      <div className="App">
        olololo
      </div>
    );
  }
}

const RateConvertContainer = connect(state=> state,  dispatch => ({
  ratePollStartAction: () => dispatch(ratePollStartAction()),
  ratePollStopAction: () => dispatch(ratePollStopAction())
}))(RateConvertComponent);

export default RateConvertContainer;

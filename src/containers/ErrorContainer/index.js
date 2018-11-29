import React, { Component } from 'react'
import { connect } from 'react-redux'
import { NotificationStack } from 'react-notification'

import { clearErrors } from '../../actions'

class ErrorsComponent extends Component {
	render() {
		const { errors } = this.props
		return (
			<NotificationStack
				notifications={errors}
				onDismiss={() => clearErrors()}
			/>
		)
	}
}

export default connect(
	state => state,
	dispatch => ({ clearErrors: () => dispatch(clearErrors()) }),
)(ErrorsComponent)

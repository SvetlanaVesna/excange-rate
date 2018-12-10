import React from 'react'

import RateConvertContainer from './containers/RateConverter'
import ErrorContainer from './containers/ErrorContainer'
import AvaliableWalletsContainer from './containers/AvaliableWalletsContainer'

export default () => (
	<div>
		<RateConvertContainer />
		<ErrorContainer />
		<AvaliableWalletsContainer />
	</div>
)

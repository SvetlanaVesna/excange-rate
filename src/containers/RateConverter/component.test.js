import React from 'react'
import Enzyme, { shallow } from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'

import RateConverter from './index'
Enzyme.configure({ adapter: new Adapter() })

describe('<RateConverter />', () => {
	it('snapshot test for RateConverter component', () => {
		const eurRate = 0.879981
		const gbpRate = 0.782398
		const resultIndex = eurRate / gbpRate
		const inputValue = 12
		const resultValue = inputValue * resultIndex

		const props = {
			availableRates: ['GBP', 'EUR', 'USD'],
			sourceCurrency: 'GBP',
			targetCurrency: 'EUR',
			valueToConvert: 12,
			setValueToConvert: jest.fn(),
			selectCurrency: jest.fn(),
			resultValue: resultValue,
			ratePollStopAction: jest.fn(),
			convertIndex: resultIndex,
			error: false,
			isFetching: false,

			userWallets: {
				USD: {
					content: 58,
					currency: 'USD',
				},
				EUR: {
					content: 0,
					currency: 'EUR',
				},
				GBP: {
					content: 2,
					currency: 'GBP',
				},
			},
			selectedWallet: { currency: 'GBP', content: 2 },
			targetUserWallet: { currency: 'USD', content: 58 },

			selectWallet: jest.fn(),
			exchange: jest.fn(),
		}

		const component = shallow(<RateConverter {...props} />)

		expect(component).toMatchSnapshot()
	})
})

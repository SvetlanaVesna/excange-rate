import React from 'react'
import Enzyme, { shallow, mount } from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'
import { Provider } from 'react-redux'

import { configureStore } from '../../../../store'
import TargetWalletComponent from './index'

Enzyme.configure({ adapter: new Adapter() })

describe('<TargetWalletComponent />', () => {
	it('snapshot test for TargetWalletComponent component', () => {
		const props = {
			resultValue: '',
			selectWallet: jest.fn(),
			targetCurrency: 'EUR',
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
			exchange: jest.fn(),
			error: false,
		}

		const component = shallow(<TargetWalletComponent {...props} />)

		expect(component).toMatchSnapshot()
	})
	it('test for TargetWalletComponent component if error', () => {
		const props = {
			error: true,
			resultValue: '',
			selectWallet: jest.fn(),
			targetCurrency: 'EUR',
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
			exchange: jest.fn(),
		}

		const component = mount(<TargetWalletComponent {...props} />)
		const button = component.find('.rate_exchange')
		expect(button.prop('disabled')).toEqual(true)
	})
})

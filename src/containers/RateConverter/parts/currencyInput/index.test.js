import React from 'react'
import Enzyme, { shallow, mount } from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'

import CurrencyInputComponent from './index'

Enzyme.configure({ adapter: new Adapter() })

describe('<CurrencyInputComponent />', () => {
	it('snapshot test for CurrencyInputComponent component', () => {
		const props = {
			error: false,
			sourceCurrency: 'GBP',
			valueToConvert: 12,
			setValueToConvert: jest.fn(),
		}

		const component = shallow(<CurrencyInputComponent {...props} />)

		expect(component).toMatchSnapshot()
	})
	it('test for CurrencyInputComponent component if error', () => {
		const props = {
			error: true,
			sourceCurrency: 'GBP',
			valueToConvert: '',
			setValueToConvert: jest.fn(),
		}

		const component = mount(<CurrencyInputComponent {...props} />)
		const error = component.find('.input_error_label')
		expect(error.length).toEqual(1)
	})
})

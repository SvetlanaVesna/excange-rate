import React from 'react'
import Enzyme, { shallow, mount } from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'
import { Provider } from 'react-redux'

import { configureStore } from '../../store'

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
			parseError: false,
		}

		const component = shallow(<RateConverter {...props} />)

		expect(component).toMatchSnapshot()
	})

	it('select currencies and enter value to convert', () => {
		const eurRate = 0.879981
		const gbpRate = 0.782398
		const resultIndex = eurRate / gbpRate
		const inputValue = 12
		const resultValue = inputValue * resultIndex

		const props = {
			availableRates: ['GBP', 'EUR', 'USD'],
			sourceCurrency: 'GBP',
			targetCurrency: 'EUR',
			valueToConvert: inputValue,
			setValueToConvert: jest.fn(),
			selectCurrency: jest.fn(),
			ratePollStopAction: jest.fn(),
			convertIndex: resultIndex,
			parseError: false,
		}
		const storeStub = configureStore()

		const component = mount(
			<Provider store={storeStub}>
				<RateConverter {...props} />
			</Provider>,
		)
		const sourceCur = component.find('.source_rate_select')
		sourceCur.simulate('change', { target: { value: props.sourceCurrency } })

		const targetCur = component.find('.target_rate_select')
		targetCur.simulate('change', { target: { value: props.targetCurrency } })

		const input = component.find('.convert_value_input')
		input.simulate('change', {
			target: { value: props.valueToConvert.toString() },
		})

		const calculatedValue = component
			.find('.convert_value_output')
			.prop('value')
		expect(calculatedValue).toEqual(resultValue)
		component.unmount()
	})
})

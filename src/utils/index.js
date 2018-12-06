export function isNotNumber(valueToConvert) {
	console.log(valueToConvert)
	return valueToConvert !== '' && !valueToConvert.match(/[0-9-. ]/g)
}
export function clearField(value) {
	const regExpr = /[0-9-.]/g
	return value.match(regExpr) ? value.match(regExpr).join('') : ''
}

export function formatter(currency, value) {
	const formatter = new Intl.NumberFormat('en-US', {
		currency: currency,
		minimumFractionDigits: 2,
	})
	return Number.parseFloat(formatter.format(value))
}

export function checkInputValue(maxInput, valueToCheck) {
	if (valueToCheck > maxInput)
		return {
			valueToConvert: '',
			error: "This value can't be more than wallet content",
		}
	if (!/^[0-9 ]*\.?[0-9 ]*$/.test(valueToCheck))
		return {
			valueToConvert: '',
			error: 'This value can contain only digits',
		}
	else
		return {
			valueToConvert: valueToCheck.replace(' ', ''),
			error: false,
		}
}

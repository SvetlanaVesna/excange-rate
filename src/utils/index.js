export function isNotNumber(valueToConvert) {
	return valueToConvert !== '' && !valueToConvert.match(/[0-9-. ]/g)
}
export function clearField(value) {
	const regExpr = /[0-9-.]/g
	return  value.match(regExpr) ? value.match(regExpr).join('') : ''
}

export function formatter(currency, value) {
	const formatter = new Intl.NumberFormat('en-US', {
		currency: currency,
		minimumFractionDigits: 2,
	})
	return formatter.format(value)
}

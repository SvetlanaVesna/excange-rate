export function isNotNumber(valueToConvert) {
	return (
		valueToConvert !== '' &&
		(!valueToConvert.match(/^[+-]?\d+(\.\d+)?$/) || isNaN(valueToConvert))
	)
}

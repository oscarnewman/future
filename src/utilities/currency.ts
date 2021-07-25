export function formatMinorAmmount(amount: number, decimals: number = 0) {
	return Intl.NumberFormat('en-US', {
		style: 'currency',
		currency: 'USD',
		minimumFractionDigits: decimals,
		maximumFractionDigits: decimals,
	}).format(amount / 100)
}

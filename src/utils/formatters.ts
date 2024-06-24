export const importDoc = (file: string): string => `/assets/documents/${file}`;

export const formatDate = (today: Date) => {
	const day = String(today.getDate()).padStart(2, '0');
	const month = String(today.getMonth() + 1).padStart(2, '0');
	const year = today.getFullYear();
	return `${day}.${month}.${year}`;
}

export const calcXIRR = (cashFlows: number[], dates: number[]) => {
	const EPSILON = 0.000001;
	const MAX_ITERATIONS = 100;
	let rate = 0.1;

	function f(rate: number) {
		let sum = 0;
		for (let i = 0; i < cashFlows.length; i++) {
			sum += cashFlows[i] / Math.pow(1 + rate, (dates[i] - dates[0]) / (365 * 24 * 60 * 60));
		}
		return sum;
	}

	function fDerivative(rate: number) {
		let sum = 0;
		for (let i = 0; i < cashFlows.length; i++) {
			sum -= (dates[i] - dates[0]) / (365 * 24 * 60 * 60) * cashFlows[i] / Math.pow(1 + rate, (dates[i] - dates[0]) / (365 * 24 * 60 * 60) + 1);
		}
		return sum;
	}

	let iteration = 0;
	let error = Number.MAX_VALUE;

	while (error > EPSILON && iteration < MAX_ITERATIONS) {
		let newRate = rate - f(rate) / fDerivative(rate);
		error = Math.abs(newRate - rate);
		rate = newRate;
		iteration++;
	}

	const resultRate = rate * 100;

	return resultRate.toFixed(2);
}

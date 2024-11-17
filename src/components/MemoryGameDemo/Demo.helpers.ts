export function convertTime(time: number) {
	const second = time % 60;
	const minute = ((time - second) / 60).toString().padStart(2, '0').split('');
	const secondStr = second.toString().padStart(2, '0').split('');
	const array = [...minute, ':', ...secondStr];
	if (areDigits(array)) {
		return array.map((t, i) => ({ id: i, digit: t }));
	}
	return [];
}

export function getEdge(size: number) {
	const rightEdge = size === 4 ? [3, 7, 11, 15] : [5, 11, 17, 23, 29, 35];
	const leftEdge = size === 4 ? [0, 4, 8, 12] : [0, 6, 12, 18, 24, 30];
	const bottomEdge = size === 4 ? [12, 13, 14, 15] : [30, 31, 32, 33, 34, 35];
	const topEdge = size === 4 ? [0, 1, 2, 3] : [0, 1, 2, 3, 4, 5];
	return { rightEdge, leftEdge, bottomEdge, topEdge };
}

type Digit = '1' | '2' | '3' | '4' | '5' | '6' | '7' | '8' | '9' | '0' | ':';

const validDigits = new Set([
	'1',
	'2',
	'3',
	'4',
	'5',
	'6',
	'7',
	'8',
	'9',
	'0',
	':',
]);

function areDigits(values: string[]): values is Digit[] {
	return values.every(value => validDigits.has(value));
}

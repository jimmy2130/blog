export function convertTime(time) {
	let second = time % 60;
	let minute = ((time - second) / 60).toString().padStart(2, '0').split('');
	second = second.toString().padStart(2, '0').split('');
	return [...minute, ':', ...second].map((t, i) => ({ id: i, digit: t }));
}

export function getEdge(size) {
	const rightEdge = size === 4 ? [3, 7, 11, 15] : [5, 11, 17, 23, 29, 35];
	const leftEdge = size === 4 ? [0, 4, 8, 12] : [0, 6, 12, 18, 24, 30];
	const bottomEdge = size === 4 ? [12, 13, 14, 15] : [30, 31, 32, 33, 34, 35];
	const topEdge = size === 4 ? [0, 1, 2, 3] : [0, 1, 2, 3, 4, 5];
	return { rightEdge, leftEdge, bottomEdge, topEdge };
}

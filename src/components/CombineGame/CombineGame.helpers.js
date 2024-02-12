import { MESSAGES } from './constants';

export function createPuzzle() {
	let set = new Set();
	let arr = [];
	while (arr.length < 9) {
		let randomNum = Math.floor(Math.random() * 27);
		if (!set.has(randomNum)) {
			set.add(randomNum);
			arr.push(randomNum);
		}
	}
	return arr.map(num => num.toString(3).padStart(3, '0'));
}

export function checkSingleGuess(guess, puzzle, combo) {
	if (guess.length !== 3 || isNaN(parseInt(guess))) {
		return { isCorrect: false, message: '請選 3 個圖案' };
	}
	if (guess[0] === guess[1] || guess[1] === guess[2] || guess[0] === guess[2]) {
		return { isCorrect: false, message: '請選 3 個不一樣的圖案' };
	}
	const guessCombo = getCombo(guess);

	for (let i = 0; i < guessCombo.length; i++) {
		if (combo.includes(guessCombo[i])) {
			return {
				isCorrect: false,
				message: `${guessCombo[i]} 已被回答過`,
			};
		}
	}
	const selectedShapes = guess.split('').map(char => puzzle[Number(char) - 1]);
	for (let i = 0; i < 3; i++) {
		if (
			!checkDigit(
				selectedShapes[0][i],
				selectedShapes[1][i],
				selectedShapes[2][i],
			)
		) {
			return {
				isCorrect: false,
				message: getErrorMessage(
					selectedShapes[0][i],
					selectedShapes[1][i],
					selectedShapes[2][i],
					i,
				),
			};
		}
	}
	return { isCorrect: true, message: '' };
}

function getCombo(guess) {
	let input = guess.split('');
	let ans = [];
	dfs(input, [], ans, new Set());
	return ans;
}

function dfs(input, combo, ans, record) {
	if (combo.length === input.length) {
		ans.push(combo.join(''));
		return;
	}
	for (let i = 0; i < input.length; i++) {
		if (!record.has(input[i])) {
			record.add(input[i]);
			combo.push(input[i]);
			dfs(input, combo, ans, record);
			combo.pop();
			record.delete(input[i]);
		}
	}
}

function checkDigit(d1, d2, d3) {
	if (d1 === d2 && d2 === d3) {
		return true;
	}
	if (d1 !== d2 && d2 !== d3 && d1 !== d3) {
		return true;
	}
	return false;
}

function getErrorMessage(d1, d2, d3, i) {
	let commonCode = '';
	if (d1 === d2 || d1 === d3) {
		commonCode = d1;
	} else {
		commonCode = d2;
	}

	return `${MESSAGES[i][Number(commonCode)]}有 2 個`;
}

export function checkFinish(puzzle, guessNum) {
	const input = [1, 2, 3, 4, 5, 6, 7, 8, 9];
	const combos = getEveryCombo(input);
	let correctAnsNum = 0;
	for (let i = 0; i < combos.length; i++) {
		if (checkSingleGuess(combos[i], puzzle, []).isCorrect) {
			correctAnsNum += 1;
		}
	}
	const isFinished = correctAnsNum === guessNum;
	return { isFinished, message: isFinished ? '' : '還有組合沒被找到' };
}

function getEveryCombo(input) {
	let ans = [];
	dfs2(input, 0, [], ans, new Set());
	return ans;
}

function dfs2(input, index, combo, ans, record) {
	if (combo.length === 3) {
		ans.push(combo.join(''));
		return;
	}
	for (let i = index; i < input.length; i++) {
		if (!record.has(input[i])) {
			record.add(input[i]);
			combo.push(input[i]);
			dfs2(input, i + 1, combo, ans, record);
			combo.pop();
			record.delete(input[i]);
		}
	}
}

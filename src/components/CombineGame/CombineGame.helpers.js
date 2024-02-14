import { format } from 'date-fns';
import { MESSAGES } from './constants';
import { range, sampleOne } from '@/utils';

function encode(num) {
	return num.toString(3).padStart(3, '0');
}

function decode(str) {
	return parseInt(str, 3);
}

export function getAnsBoundary(answerNum) {
	if (typeof answerNum === 'number') {
		return { answerLBound: answerNum, answerHBound: answerNum };
	}
	if (Array.isArray(answerNum) && answerNum.length === 2) {
		return { answerLBound: answerNum[0], answerHBound: answerNum[1] };
	}
	return { answerLBound: 0, answerHBound: 6 };
}

export function createPuzzle(input) {
	const [low, high] = typeof input === 'number' ? [input, input] : input;
	const targetAnswerNum = sampleOne(range(low, high + 1));

	if (targetAnswerNum === 0) {
		return createPuzzleForNoAnswer();
	}
	while (true) {
		const numbers = new Set(range(27));
		const puzzle = [];
		while (puzzle.length < 9) {
			const randomNumber = sampleOne(Array.from(numbers));
			numbers.delete(randomNumber);
			puzzle.push(encode(randomNumber));
		}
		const correctAnswers = getCorrectAnswers(puzzle);
		if (correctAnswers.length === targetAnswerNum) {
			return { puzzle, correctAnswers };
		}
	}
}

function createPuzzleForNoAnswer() {
	while (true) {
		const numbers = new Set(range(27));
		const puzzle = [];
		for (let i = 0; i < 9; i++) {
			if (numbers.size === 0) {
				break;
			}
			const randomNumber = sampleOne(Array.from(numbers));
			numbers.delete(randomNumber);
			for (let i = 0; i < puzzle.length; i++) {
				const num1 = puzzle[i];
				const num2 = randomNumber;
				numbers.delete(findCorrectShape(num1, num2));
			}
			puzzle.push(randomNumber);
		}
		if (puzzle.length === 9) {
			return { puzzle: puzzle.map(num => encode(num)), correctAnswers: [] };
		}
	}
}

function findCorrectShape(num1, num2) {
	const code1 = encode(num1);
	const code2 = encode(num2);
	let code3 = '';
	for (let i = 0; i < 3; i++) {
		const variations = new Set(['0', '1', '2']);
		if (code1[i] === code2[i]) {
			code3 += code1[i];
		} else {
			variations.delete(code1[i]);
			variations.delete(code2[i]);
			code3 += Array.from(variations)[0];
		}
	}
	return decode(code3);
}

export function checkSingleGuess(guess, puzzle, combo) {
	const variations = getVariations(guess);

	for (let i = 0; i < variations.length; i++) {
		if (combo.includes(variations[i])) {
			return {
				isCorrect: false,
				message: `${variations[i]} 已被回答過`,
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

function getVariations(guess) {
	const input = guess.split('');
	const variations = [];
	dfs(input, [], variations, new Set());
	return variations;
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

export function getCorrectAnswers(puzzle) {
	const correctAnswers = [];
	const input = [1, 2, 3, 4, 5, 6, 7, 8, 9];
	const combos = getEveryPossibleAnswer(input);

	for (let i = 0; i < combos.length; i++) {
		if (checkSingleGuess(combos[i], puzzle, []).isCorrect) {
			correctAnswers.push(combos[i]);
		}
	}
	return correctAnswers;
}

export function getRemainingAnswers(answers, correctAnswers) {
	const remainingAnswers = [];
	for (let i = 0; i < correctAnswers.length; i++) {
		const variations = getVariations(correctAnswers[i]);
		let isAnswered = false;
		for (let j = 0; j < variations.length; j++) {
			if (answers.includes(variations[j])) {
				isAnswered = true;
				break;
			}
		}
		if (!isAnswered) {
			remainingAnswers.push(correctAnswers[i]);
		}
	}
	return remainingAnswers;
}

export function getDateAndTime() {
	const [date, time] = format(new Date(), 'yyyy/MM/dd HH:mm:ss').split(' ');
	return { date, time };
}

function getEveryPossibleAnswer(input) {
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

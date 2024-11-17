export type Mode = 'normal' | 'missing';
export type Difficulty = 'easy' | 'medium' | 'hard';
export type GameStatus =
	| 'preparing'
	| 'countdown'
	| 'running'
	| 'success'
	| 'fail';
export type Question = {
	answerNum: number[];
	hideAnswer: boolean;
	mode: Mode;
};

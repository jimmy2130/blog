export type GameState =
	| 'cover'
	| 'cover-inactive'
	| 'active'
	| 'active-inactive'
	| 'cover-cover'
	| 'active-cover'
	| 'inactive';

export type FirstDemoPiece = {
	state: Exclude<GameState, 'inactive'>;
	id: string;
};

export type SecondDemoGameState = Extract<
	GameState,
	'cover' | 'active' | 'inactive'
>;

export type SecondDemoPiece = {
	state: SecondDemoGameState;
	id: string;
};

import React from 'react';
import styled, { keyframes } from 'styled-components';
import FirstDemoBoard from './FirstDemoBoard';
import Piece from './Piece';
import UnstyledButton from '@/components/UnstyledButton';
import Icon from '@/components/Icon';
import { QUERIES } from '@/constants';

const INACTIVE_STATES = ['cover-inactive', 'active', 'active-inactive'];

const INITIAL_GAME = [
	{ state: 'cover', id: 'abc' },
	{ state: 'cover', id: 'def' },
];

// 從mdx指定要成功的Demo還是失敗的Demo
function FirstDemo({ match = 'fail' }) {
	const [game, setGame] = React.useState(INITIAL_GAME);
	// state: c, a, ac, ai, cc, ci
	function reveal(id) {
		const piece = game.find(g => g.id === id);
		if (INACTIVE_STATES.includes(piece.state)) {
			return;
		}
		const pieceIndex = game.findIndex(g => g.id === id);
		const nextGame = [...game];
		const nextPiece = { ...piece, state: 'active' };
		nextGame[pieceIndex] = nextPiece;
		const twoHaveBeenFlipped =
			nextGame.filter(g => g.state === 'active').length === 2;
		if (twoHaveBeenFlipped) {
			if (match === 'success') {
				nextGame[pieceIndex]['state'] = 'cover-inactive';
				nextGame[pieceIndex === 0 ? 1 : 0]['state'] = 'active-inactive';
			} else if (match === 'fail') {
				nextGame[pieceIndex]['state'] = 'cover-cover';
				nextGame[pieceIndex === 0 ? 1 : 0]['state'] = 'active-cover';
			} else {
				console.error(`Cannot recognize match ${match}`);
			}
		} else {
			nextGame[pieceIndex === 0 ? 1 : 0]['state'] = 'cover';
		}
		setGame(nextGame);
	}

	function handleRestart(event) {
		event.preventDefault();
		setGame(INITIAL_GAME);
	}

	return (
		<Wrapper>
			<FirstDemoBoardWrapper>
				<FirstDemoBoard
					triangleState={game[0]['state']}
					circleState={game[1]['state']}
				/>
				<Restart onClick={handleRestart}>
					<Icon id="refresh-ccw" color="var(--color-gray-900)" size="20"></Icon>
				</Restart>
			</FirstDemoBoardWrapper>
			<ControlGroup>
				<Piece
					text="8"
					shape="triangle"
					id={game[0]['id']}
					animation={game[0]['state']}
					reveal={reveal}
					x={10}
				/>
				<Piece
					text={match === 'fail' ? '2' : '8'}
					shape="circle"
					id={game[1]['id']}
					animation={game[1]['state']}
					reveal={reveal}
					x={-10}
				/>
			</ControlGroup>
		</Wrapper>
	);
}

const Wrapper = styled.form`
	display: flex;
	flex-direction: column;
	align-items: center;

	font-size: calc(19 / 16 * 1rem);
	color: var(--color-gray-900);

	@media ${QUERIES.phoneAndDown} {
		gap: 16px;
	}
`;

const FirstDemoBoardWrapper = styled.div`
	position: relative;
`;

const ControlGroup = styled.div`
	display: flex;

	@media ${QUERIES.phoneAndDown} {
		gap: 32px;
	}
`;

const Restart = styled(UnstyledButton)`
	position: absolute;
	bottom: 12px;
	right: 12px;
`;

export default FirstDemo;

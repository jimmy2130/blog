import React from 'react';
import styled from 'styled-components';
import SecondDemoBoard from './SecondDemoBoard';
import Piece2 from './Piece2';
import UnstyledButton from '@/components/UnstyledButton';
import Icon from '@/components/Icon';
import { QUERIES } from '@/constants';

const INITIAL_GAME = [
	{ state: 'cover', id: 'abc' },
	{ state: 'cover', id: 'def' },
];

// 從mdx指定要成功的Demo還是失敗的Demo
function SecondDemo({ match = 'fail' }) {
	const [game, setGame] = React.useState(INITIAL_GAME);
	const [action, setAction] = React.useState('unknown');

	function reveal(id) {
		const piece = game.find(g => g.id === id);
		if (piece.state === 'active' || piece.state === 'inactive') {
			return;
		}
		const pieceIndex = game.findIndex(g => g.id === id);
		const nextGame = [...game];
		const nextPiece = { ...piece, state: 'active' };
		nextGame[pieceIndex] = nextPiece;
		const twoHaveBeenFlipped =
			nextGame.filter(g => g.state === 'active').length === 2;
		if (twoHaveBeenFlipped) {
			setAction(match);
		}
		setGame(nextGame);
	}

	React.useEffect(() => {
		function showResult(action) {
			const nextGame = game.map(piece => {
				return {
					...piece,
					state: action === 'success' ? 'inactive' : 'cover',
				};
			});
			setGame(nextGame);
			setAction('unknown');
		}
		if (action === 'unknown') {
			return;
		}
		const timeoutId = window.setTimeout(() => {
			showResult(action);
		}, 600);

		return () => {
			window.clearTimeout(timeoutId);
		};
	}, [action, game]);

	function handleRestart(event) {
		event.preventDefault();
		setGame(INITIAL_GAME);
	}

	return (
		<Wrapper>
			<SecondDemoBoardWrapper>
				<SecondDemoBoard
					triangleState={game[0]['state']}
					circleState={game[1]['state']}
				/>
				<Restart onClick={handleRestart}>
					<Icon id="refresh-ccw" color="var(--color-gray-900)" size="20"></Icon>
				</Restart>
			</SecondDemoBoardWrapper>
			<ControlGroup>
				<Piece2
					text="8"
					shape="triangle"
					id={game[0]['id']}
					reveal={reveal}
					state={game[0]['state']}
					x={10}
				/>
				<Piece2
					text={match === 'fail' ? '2' : '8'}
					shape="circle"
					id={game[1]['id']}
					reveal={reveal}
					state={game[1]['state']}
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

const SecondDemoBoardWrapper = styled.div`
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

export default SecondDemo;

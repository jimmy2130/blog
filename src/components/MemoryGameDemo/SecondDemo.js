import React from 'react';
import styled from 'styled-components';
import SecondDemoBoard from './SecondDemoBoard';
import Piece2 from './Piece2';
import UnstyledButton from '../UnstyledButton';
import Icon from '../Icon';
import { QUERIES } from '../../constants';

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
					<Icon id="refresh-ccw" color="var(--color-gray-900)"></Icon>
				</Restart>
			</SecondDemoBoardWrapper>
			<ControlGroup>
				<Piece2
					text="8"
					shape="triangle"
					id={game[0]['id']}
					reveal={reveal}
					state={game[0]['state']}
				/>
				<Piece2
					text={match === 'fail' ? '2' : '8'}
					shape="circle"
					id={game[1]['id']}
					reveal={reveal}
					state={game[1]['state']}
				/>
			</ControlGroup>
		</Wrapper>
	);
}

const Wrapper = styled.form`
	max-width: 500px;
	margin-left: auto;
	margin-right: auto;
	margin-bottom: 60px;

	display: flex;
	flex-direction: column;
	align-items: center;
	gap: 32px;

	font-size: calc(19 / 16 * 1rem);
	color: var(--color-gray-900);
`;

const SecondDemoBoardWrapper = styled.div`
	position: relative;
`;

const ControlGroup = styled.div`
	display: flex;
	gap: 32px;
`;

const Restart = styled(UnstyledButton)`
	position: absolute;
	bottom: 20px;
	right: 20px;

	@media ${QUERIES.phoneAndDown} {
		bottom: 12px;
		right: 12px;
	}
`;

export default SecondDemo;

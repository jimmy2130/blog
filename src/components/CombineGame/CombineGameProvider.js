import React from 'react';
import FullBleed from '@/components/FullBleed';
import CombineGame from './CombineGame';
import RevealContent from './RevealContent';

function CombineGameProvider({ children, difficulty, timeLimit, questions }) {
	const [isRevealed, setIsRevealed] = React.useState(false);

	function handleReveal() {
		setIsRevealed(true);
	}

	return (
		<>
			<FullBleed>
				<CombineGame
					handleReveal={handleReveal}
					difficulty={difficulty}
					timeLimit={timeLimit}
					questions={questions}
				/>
			</FullBleed>
			<RevealContent handleReveal={handleReveal} isRevealed={isRevealed}>
				{children}
			</RevealContent>
		</>
	);
}

export default CombineGameProvider;

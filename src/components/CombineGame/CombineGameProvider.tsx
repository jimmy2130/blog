import React from 'react';
import Spacer from '@/components/Spacer';
import FullBleed from '@/components/FullBleed';
import CombineGame from './CombineGame';
import RevealContent from './RevealContent';
import type { Difficulty, Question } from './types';

type Props = {
	children: React.ReactNode;
	difficulty: Difficulty;
	timeLimit: number;
	questions: Question[];
};

function CombineGameProvider({
	children,
	difficulty,
	timeLimit,
	questions,
}: Props) {
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
			{isRevealed && <Spacer size={40} />}
			<RevealContent handleReveal={handleReveal} isRevealed={isRevealed}>
				{children}
			</RevealContent>
		</>
	);
}

export default CombineGameProvider;

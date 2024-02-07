import React from 'react';

function RevealContent({ children }) {
	const [isRevealed, setIsRevealed] = React.useState(false);

	function handleClick() {
		setIsRevealed(true);
	}
	return (
		<div>
			<button onClick={handleClick}>reveal</button>
			{isRevealed && children}
		</div>
	);
}

export default RevealContent;

import React from 'react';
import styled from 'styled-components';

function MaxWidthWrapper({ maxWidth, breathingRoom, ...delegated }) {
	return (
		<Wrapper
			style={{
				'--max-width': `${maxWidth}px`,
				'--breathing-room': `${breathingRoom}px`,
			}}
			{...delegated}
		/>
	);
}

const Wrapper = styled.div`
	max-width: calc(var(--max-width) + 2 * var(--breathing-room));
	margin-left: auto;
	margin-right: auto;
	padding-left: var(--breathing-room);
	padding-right: var(--breathing-room);
`;

export default MaxWidthWrapper;

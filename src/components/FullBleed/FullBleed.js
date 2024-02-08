import React from 'react';
import styled from 'styled-components';
import { MainSection } from '@/components/Layout';
import { CONTENT_MAX_WIDTH } from '@/constants';

function FullBleed({ children }) {
	return <Wrapper>{children}</Wrapper>;
}

const Wrapper = styled.div`
	--max-width: ${CONTENT_MAX_WIDTH}px;
	--breathing-room: clamp(24px, 100cqw - var(--max-width), 60px);

	margin-left: calc(var(--breathing-room) * -1);
	margin-right: calc(var(--breathing-room) * -1);

	${MainSection} > & {
		grid-column: 1 / -1;
	}
`;

export default FullBleed;

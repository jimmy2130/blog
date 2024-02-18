import React from 'react';
import styled from 'styled-components';
import { MainSection } from '@/components/Layout';
import { CONTENT_BREATHING_ROOM } from '@/constants';

function FullBleed({ children }) {
	return <Wrapper>{children}</Wrapper>;
}

const Wrapper = styled.div`
	--breathing-room: ${CONTENT_BREATHING_ROOM}px;

	margin-left: calc(var(--breathing-room) * -1);
	margin-right: calc(var(--breathing-room) * -1);

	${MainSection} > & {
		grid-column: 1 / -1;
	}
`;

export default FullBleed;

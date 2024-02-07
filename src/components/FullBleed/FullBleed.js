import React from 'react';
import styled from 'styled-components';
import { MainSection } from '@/components/Layout';

function FullBleed({ children }) {
	return <Wrapper>{children}</Wrapper>;
}

const Wrapper = styled.div`
	--breathing-room: clamp(24px, 100cqw - 70ch, 60px);

	margin-left: calc(var(--breathing-room) * -1);
	margin-right: calc(var(--breathing-room) * -1);

	${MainSection} > & {
		grid-column: 1 / -1;
	}
`;

export default FullBleed;

import React from 'react';
import styled from 'styled-components';
import { QUERIES } from '@/constants';

function DemoGroup({ children }) {
	return <Wrapper>{children}</Wrapper>;
}

const Wrapper = styled.div`
	display: flex;
	gap: 16px;
	margin-bottom: 60px;

	@media ${QUERIES.phoneAndDown} {
		flex-direction: column;
		gap: 48px;
	}
`;

export default DemoGroup;

import React from 'react';
import styled from 'styled-components';
import { QUERIES } from '../../constants';

function MaxWidthWrapper({ children, className }) {
	return <Wrapper className={className}>{children}</Wrapper>;
}

const Wrapper = styled.div`
	--max-width: 1152px;
	--padding: 60px;

	max-width: calc(var(--max-width) + 2 * var(--padding));
	margin-left: auto;
	margin-right: auto;
	padding-left: var(--padding);
	padding-right: var(--padding);

	@media ${QUERIES.phoneAndDown} {
		--padding: 24px;
	}
`;

export default MaxWidthWrapper;

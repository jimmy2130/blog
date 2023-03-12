import React from 'react';
import styled from 'styled-components';

function BasicImage({ ...delegated }) {
	return <Wrapper {...delegated} />;
}

const Wrapper = styled.img`
	border-radius: 4px;
`;

export default BasicImage;

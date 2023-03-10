import React from 'react';
import styled from 'styled-components';

function BasicImage(props) {
	return <Wrapper {...props} />;
}

const Wrapper = styled.img`
	border-radius: 4px;
`;

export default BasicImage;

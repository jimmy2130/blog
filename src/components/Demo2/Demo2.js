import styled from 'styled-components';

const Demo2 = ({ color }) => {
	return <div style={{ '--color': color }}>Such a neat demo2!</div>;
};

const Wrapper = styled.div`
	width: fit-content;
	margin: 8px auto;
	border-radius: 4px;
	padding: 16px;
	background: pink;
	color: var(--color);
`;

export default Demo2;

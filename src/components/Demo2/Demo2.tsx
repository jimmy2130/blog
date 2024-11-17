import React from 'react';

function Demo2({ color }: { color: string }) {
	return <div style={{ '--color': color }}>Such a neat demo2!</div>;
}

// const Wrapper = styled.div`
// 	width: fit-content;
// 	margin: 8px auto;
// 	border-radius: 4px;
// 	padding: 16px;
// 	background: pink;
// 	color: var(--color);
// `;

export default Demo2;

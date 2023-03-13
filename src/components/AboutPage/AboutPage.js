import React from 'react';
import styled from 'styled-components';
import Layout from '../Layout';

function AboutPage({ children }) {
	return (
		<>
			<Layout
				title="關於我"
				subtitle="關於我的介紹，包含了學歷、程式學習經歷，和工作經歷"
			>
				{children}
			</Layout>
		</>
	);
}

export default AboutPage;

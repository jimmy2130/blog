import React from 'react';
import styled from 'styled-components';
import Layout from '../Layout';

function BlogPostPage({ title, subtitle, children }) {
	return (
		<>
			<Layout title={title} subtitle={subtitle}>
				{children}
			</Layout>
		</>
	);
}

export default BlogPostPage;

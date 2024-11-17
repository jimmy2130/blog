import React from 'react';
import Layout from '@/components/Layout';

function BlogPostPage({
	title,
	subtitle,
	children,
}: {
	title: string;
	subtitle: string;
	children: React.ReactNode;
}) {
	return (
		<Layout title={title} subtitle={subtitle}>
			{children}
		</Layout>
	);
}

export default BlogPostPage;

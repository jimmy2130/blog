import Head from 'next/head';
import { getSortedPostsMetadata } from '@/helpers/post.helpers';
import BlogIndexPage from '@/components/BlogIndexPage';

export async function getStaticProps() {
	const allPostsMetadata = getSortedPostsMetadata();
	return {
		props: {
			allPostsMetadata,
		},
	};
}

function BlogIndex({ allPostsMetadata }) {
	return (
		<>
			<Head>
				<title>文章</title>
			</Head>
			<BlogIndexPage data={allPostsMetadata} />
		</>
	);
}

export default BlogIndex;

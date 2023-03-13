import Head from 'next/head';
import { getSortedPostsMetadata } from '../../src/helpers/post.helpers';
import BlogIndexPage from '../../src/components/BlogIndexPage';

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

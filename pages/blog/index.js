import Head from 'next/head';
import { getSortedPostsMetadata } from '../../src/helpers/post.helpers';

function BlogIndex({ allPostsMetadata }) {
	return (
		<>
			<Head>
				<title>文章</title>
			</Head>
			{allPostsMetadata.map(({ id, title, date, description, published }) => (
				<div key={id}>
					<div>title: {title}</div>
					<div>date: {date}</div>
					<div>description: {description}</div>
					<div>published: {published.toString()}</div>
				</div>
			))}
		</>
	);
}

export async function getStaticProps() {
	const allPostsMetadata = getSortedPostsMetadata();
	return {
		props: {
			allPostsMetadata,
		},
	};
}

export default BlogIndex;

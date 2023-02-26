import Head from 'next/head';
// import { getSortedPostsData } from '../src/helpers/mdx.helpers';
import IndexPage from '../src/components/IndexPage';

function Home({ allPostsData }) {
	return (
		<>
			<Head>
				<title>JimmyJim的部落格</title>
			</Head>
			<IndexPage />
		</>
	);
}

// export async function getStaticProps() {
// 	const allPostsData = getSortedPostsData();
// 	// console.log(allPostsData)
// 	return {
// 		props: {
// 			allPostsData,
// 		},
// 	};
// }

export default Home;

import Head from 'next/head';
import IndexPage from '@/components/IndexPage';

function Home() {
	return (
		<>
			<Head>
				<title>JimmyJim的部落格</title>
			</Head>
			<IndexPage />
		</>
	);
}

export default Home;

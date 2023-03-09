import Head from 'next/head';
import AboutPage from '../src/components/AboutPage';

import { getPostData } from '../src/helpers/post.helpers';
import { MDXRemote } from 'next-mdx-remote';
import { defaultComponents } from '../src/import-components';

export async function getStaticProps() {
	const { mdxSource, componentNames } = await getPostData('about');
	return { props: { mdxSource, componentNames } };
}

function About({ mdxSource, componentNames }) {
	return (
		<>
			<Head>
				<title>關於我</title>
			</Head>
			<AboutPage>
				<MDXRemote {...mdxSource} components={defaultComponents} />
			</AboutPage>
		</>
	);
}

export default About;

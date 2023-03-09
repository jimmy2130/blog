import React from 'react';
import Head from 'next/head';
import { getPostData, getAllPostIds } from '../../src/helpers/post.helpers';
import { MDXRemote } from 'next-mdx-remote';
import {
	defaultComponents,
	getSpecialComponents,
} from '../../src/import-components';

export async function getStaticProps({ params }) {
	const { mdxSource, componentNames } = await getPostData(params.id);
	return { props: { mdxSource, componentNames } };
}

export async function getStaticPaths() {
	const paths = getAllPostIds();
	return {
		paths,
		fallback: false,
	};
}

function Post({ mdxSource, componentNames }) {
	const components = {
		...defaultComponents,
		...getSpecialComponents(componentNames),
	};
	return (
		<>
			<Head>
				<title>{mdxSource.frontmatter.title}</title>
			</Head>

			<main>
				<h1>{mdxSource.frontmatter.title}</h1>
				<MDXRemote {...mdxSource} components={components} />
			</main>
		</>
	);
}

export default Post;

import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import { serialize } from 'next-mdx-remote/serialize';

const postsDirectory = path.join(process.cwd(), 'posts');

function getPublishedPosts() {
	return fs
		.readdirSync(postsDirectory)
		.filter(str => !str.startsWith('.'))
		.filter(fileName => {
			if (process.env.NODE_ENV !== 'production') return true;
			return getMetadata(fileName).data.published;
		});
}

// expected data structure:
// [
// 	{
// 		params: { id: 'ssg-ssr' },
// 	},
// 	{
// 		params: { id: 'pre-rendering' },
// 	},
// ];
export function getAllPostIds() {
	return getPublishedPosts().map(file => {
		return {
			params: {
				id: file,
			},
		};
	});
}

export async function getPostData(fileName) {
	const fullPath = path.join(postsDirectory, `${fileName}/${fileName}.mdx`);
	const source = fs.readFileSync(fullPath, 'utf8').toString();
	const mdxSource = await serialize(source, { parseFrontmatter: true });
	let componentNames = null;
	const metadata = getMetadata(fileName).data;
	if (metadata.components) {
		componentNames = metadata.components.split(', ');
	}
	return { mdxSource, componentNames };
}

export function getSortedPostsMetadata() {
	const fileNames = getPublishedPosts();
	const posts = fileNames.map(fileName => {
		return {
			id: fileName,
			...getMetadata(fileName).data,
		};
	});
	return posts.sort((a, b) => a.date < b.date);
}

function getMetadata(fileName) {
	const fullPath = path.join(postsDirectory, `${fileName}/${fileName}.mdx`);
	const fileContents = fs.readFileSync(fullPath, 'utf8');
	return matter(fileContents);
}

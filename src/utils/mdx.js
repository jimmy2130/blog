import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'
import {bundleMDX} from 'mdx-bundler'

const postsDirectory = path.join(process.cwd(), 'posts')

function filterPost() {
  return fs.readdirSync(postsDirectory)
    .filter(str => !str.startsWith('.'))
    .filter(fileName => {
      if(process.env.NODE_ENV !== 'production') {
        return true
      }

      // Read markdown file as string
      const fullPath = path.join(postsDirectory, `${fileName}/${fileName}.mdx`)
      const fileContents = fs.readFileSync(fullPath, 'utf8')

      // Use gray-matter to parse the post metadata section
      const matterResult = matter(fileContents)

      return matterResult.data.published
    })
}

export function getAllPostIds() {
  return filterPost().map(file => {
      return {
        params: {
          id: file,
        }
      }
    })

  // Returns an array that looks like this:
  // [
  //   {
  //     params: {
  //       id: 'ssg-ssr'
  //     }
  //   },
  //   {
  //     params: {
  //       id: 'pre-rendering'
  //     }
  //   }
  // ]
}

export async function getPostData(id) {
  const fullPath = path.join(postsDirectory, `${id}/${id}.mdx`)
  const mdxSource = fs.readFileSync(fullPath, 'utf8').toString();
  // get all the components
  const componentsSource = getAllComponents(mdxSource);
  
  // bundle
  const {code, frontmatter} = await bundleMDX(mdxSource, {
    // files: {
    //   '../components/Demo': componentText,
    // },
    files: componentsSource,
    esbuildOptions: (options) => {
      options.platform = 'node'
      return options
    }

  })
  return {code, frontmatter};

}

const getAllComponents = (mdxSource) => {
  const mdxSourceLines = mdxSource.split('\n').filter(line => {
    return line.slice(0, 6) === 'import' && line.includes('from') && line.includes('/');
  });

  const components = mdxSourceLines.map(line => line.split(' ')[1]);

  return components.reduce((acc, cur) => {
    const key = `../components/${cur}`;
    const sourcePath = path.join(process.cwd(), `src/components/${cur}/${cur}.js`);
    const value = fs.readFileSync(sourcePath, 'utf8').toString();
    acc[key] = value;
    return acc;
  }, {})
}

// const mdxSource = `
// ---
// title: Example Post
// date: 2021/04/30
// description: This is some description
// ---

// # Wahoo

// import Demo from './demo'
// import Demo2 from './demo2'

// Here's a **neat** demo:

// <Demo />
// <Demo2 />
// `.trim()

// 根據id找到mdx內容，再根據mdx內容，找到用到的Components

// export async function bundle() {

// }

export function getSortedPostsData() {
  // Get file names under /posts
  const fileNames = filterPost()
  const allPostsData = fileNames.map(fileName => {
    // Read markdown file as string
    const fullPath = path.join(postsDirectory, `${fileName}/${fileName}.mdx`)
    const fileContents = fs.readFileSync(fullPath, 'utf8')

    // Use gray-matter to parse the post metadata section
    const matterResult = matter(fileContents)

    // Combine the data with the id
    return {
      id: fileName,
      ...matterResult.data
    }
  })
  // Sort posts by date
  return allPostsData.sort((a, b) => {
    if (a.date < b.date) {
      return 1
    } else {
      return -1
    }
  })
}
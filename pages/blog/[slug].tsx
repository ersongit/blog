import * as React from 'react'
import Head from 'next/head'
import Link from 'next/link'
import styles from '../../styles/Home.module.css'

import { createClient, ContentfulClientApi } from 'contentful'
import { documentToReactComponents } from '@contentful/rich-text-react-renderer'

export const getServerSideProps = async ({ params }: any) => {
	let space: string = process.env.CONTENTFUL_SPACE_ID ? process.env.CONTENTFUL_SPACE_ID.toString() : ''
	let accessToken: string = process.env.CONTENTFUL_ACCESS_TOKEN ? process.env.CONTENTFUL_ACCESS_TOKEN.toString() : ''
	const client: ContentfulClientApi = createClient({
		space,
		accessToken
	})
	const response: any = await client.getEntries({ content_type: 'blog', 'fields.slug': params.slug })

	let blog: any = null
	if(response.items[0] !== null && response.items[0] !== undefined) {
		blog = response.items[0]
	}

	return {
		props: {
			blog
		}
	}
}

const BlogContent: React.FunctionComponent = ({ blog }: any) => {
	console.log(blog.fields.content.content);

	return (
		<>
			<Head>
				<title>Erson Puyos | Blog</title>
				<meta name="description" content="Erson Puyos | Blog" />
				<link rel="icon" href="/favicon.ico" />
			</Head>
			<h1>{blog.fields.title}</h1>
			<p className={styles.description}>{blog.sys.createdAt}</p>
			<div className="blog-content">
				{documentToReactComponents(blog.fields.content)}
			</div>
			<div className="return-home"><Link href={"/"}><a>Return Home</a></Link></div>
			
		</>
	);
};

export default BlogContent;
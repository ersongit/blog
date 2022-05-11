import type { NextPage } from 'next'
import Head from 'next/head'
import Link from 'next/link'
import styles from '../styles/Home.module.css'

import { createClient, ContentfulClientApi } from 'contentful'

export const getServerSideProps = async() => {
	let space: string = process.env.CONTENTFUL_SPACE_ID ? process.env.CONTENTFUL_SPACE_ID.toString() : ''
	let accessToken: string = process.env.CONTENTFUL_ACCESS_TOKEN ? process.env.CONTENTFUL_ACCESS_TOKEN.toString() : ''
	const client: ContentfulClientApi = createClient({
		space,
		accessToken
	})
	const response: any = await client.getEntries({content_type: 'blog'})

	return {
		props: {
			blogs: response.items
		}
	}
}

const Blog: NextPage = ({ blogs }: any) => {
	return (
		<>
			<Head>
				<title>Erson Puyos | Blog</title>
				<meta name="description" content="Erson Puyos | Blog" />
				<link rel="icon" href="/favicon.ico" />
			</Head>

			<ol className={styles.posts}>
				{blogs.map((blog: any) => (
					<li key={blog.sys.id} className={styles.post}>
						<h1 className={styles.postTitle}>
							<Link href={"/blog/" + blog.fields.slug}><a>{blog.fields.title}</a></Link>
						</h1>
						<p className={styles.description}>{blog.sys.createdAt}</p>
						<Link href={"/blog/" + blog.fields.slug}><a>Read post →</a></Link>
					</li>
				))}
			</ol>
		</>
	)
}

export default Blog
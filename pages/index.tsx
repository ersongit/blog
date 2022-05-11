import type { NextPage } from 'next'
import Head from 'next/head'
import Link from "next/link"
import Image from 'next/image'
import styles from '../styles/Home.module.css'

const Home: NextPage = () => {
	return (
		<div>
			<Head>
				<title>Erson Puyos | Blog</title>
				<meta name="description" content="Erson Puyos | Blog" />
				<link rel="icon" href="/favicon.ico" />
			</Head>

			<ol className={styles.posts}>
				<li className={styles.post}>
					<h3 className={styles.postTitle}>
						<Link href="/"><a>Blog Title</a></Link>
					</h3>
					<p className={styles.postDescription}>123 date</p>
					<Link href="/"><a>Read post →</a></Link>
				</li>
				<li className={styles.post}>
					<h3 className={styles.postTitle}>
						<Link href="/"><a>Blog Title</a></Link>
					</h3>
					<p className={styles.postDescription}>123 date</p>
					<Link href="/"><a>Read post →</a></Link>
				</li>
				<li className={styles.post}>
					<h3 className={styles.postTitle}>
						<Link href="/"><a>Blog Title</a></Link>
					</h3>
					<p className={styles.postDescription}>123 date</p>
					<Link href="/"><a>Read post →</a></Link>
				</li>
				<li className={styles.post}>
					<h3 className={styles.postTitle}>
						<Link href="/"><a>Blog Title</a></Link>
					</h3>
					<p className={styles.postDescription}>123 date</p>
					<Link href="/"><a>Read post →</a></Link>
				</li>
				<li className={styles.post}>
					<h3 className={styles.postTitle}>
						<Link href="/"><a>Blog Title</a></Link>
					</h3>
					<p className={styles.postDescription}>123 date</p>
					<Link href="/"><a>Read post →</a></Link>
				</li>
			</ol>
		</div>
	)
}

export default Home
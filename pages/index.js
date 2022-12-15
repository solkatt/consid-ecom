import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import { renderMetaTags, StructuredText } from 'react-datocms'
import { request } from '../lib/datocms'

// components
import Layout from '../components/Layout'


export default function Home({ startpage }) {

	return (
		<Layout title="Consid Commerce">
			<div className={styles.grid}>
				<div className={styles.title}>
					<h1>{startpage.title}</h1>
					<div className={styles.content}>
						<StructuredText data={startpage?.content?.value} />
					</div>
				</div>
				<div className={styles.imageWrapper}>
					<img
						src={startpage?.mainImage?.url}
						alt='consid commerce image'
						className={styles.mainImage}
					/>
				</div>
			</div>
		</Layout>
	)
}

const HOMEPAGE_QUERY = `
query GetStartPage {
  startpage {
    content {
      value
    }
    title
    id
    mainImage {
      url
      alt
    }
  }
}

`

export async function getStaticProps() {
	const data = await request({
		query: HOMEPAGE_QUERY,
		// variables: { limit: 10 }
	})
	return {
		props: data,
	}
}

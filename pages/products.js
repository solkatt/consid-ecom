import Head from 'next/head'
import styles from '../styles/Products.module.css'
import { request } from '../lib/datocms'
import Link from 'next/link'
import ProductCard from '../components/products/ProductCard'

export default function Products(props) {
	const { allProducts } = props
	return (
		<div className={styles.main}>
			<Head>
				<title>Consid Commerce | Products</title>
				<meta
					name='description'
					content='Generated by create next app'
				/>
				{/* {renderMetaTags(startPage.seo.concat(data.site.favicon))} */}
				<link rel='icon' href='/favicon.ico' />
			</Head>
			<div className={styles.container}>
				<div className={styles.grid}>
					{allProducts.map((product) => (
						<div className={styles.productItem}>
							<ProductCard key={product.id} product={product} />
						</div>
					))}
				</div>
				<h1>Products</h1>
			</div>
		</div>
	)
}

const PRODUCTS_QUERY = `
 query GetAllProducts{
  allProducts {
    id
    name
    price
    description {
      value
    }
    alternativeImages {
      url
    }
    mainImage {
      url
    }
  }
}

`

export const getStaticProps = async () => {
	const products = await request({
		query: PRODUCTS_QUERY,
	})

	return {
		props: products,
	}
}

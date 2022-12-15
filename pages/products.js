import Head from 'next/head'
import styles from '../styles/Products.module.css'
import { request } from '../lib/datocms'
import Link from 'next/link'

// components
import Layout from '../components/Layout'
import ProductCard from '../components/products/ProductCard'

export default function Products(props) {
	const { allProducts } = props
	return (
		<Layout title="Consid Commerce | Products">
			<div className={styles.container}>
				<h1>Products</h1>
				<div className={styles.grid}>
					{allProducts.map((product) => (
						<div key={product.id} className={styles.productItem}>
							<ProductCard key={product.id} product={product} />
						</div>
					))}
				</div>
			</div>
		</Layout>

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

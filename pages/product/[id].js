import Link from 'next/link'
import Head from 'next/head'
import { request } from '../../lib/datocms'
import styles from '../../styles/Product.module.css'
import { StructuredText } from 'react-datocms'

//redux 
import { useDispatch } from 'react-redux'
import { addToCart } from '../../slices/cartSlice'

// components
import Layout from '../../components/Layout'
import Button from '../../components/Button'

export default function Product({ data }) {
	const { product } = data
	const dispatch = useDispatch()


	return (

		<Layout title={`Consid Commerce | ${product?.name}`}>
			<div className={styles.grid}>
				<div className={styles.title}>
					<h1>{product.name}</h1>
					<p className={styles.price}>{product.price}:-</p>
					<div style={{ marginTop: '50px' }}>
						<Link href='/products'>
							<div style={{ height: '.1rem' }}>

							</div>
						</Link>
					</div>
					<div className={styles.content}>
						<StructuredText data={product.description.value} />
					</div>
					<Button onClick={() => dispatch(addToCart(product))}>Add to cart</Button>
				</div>
				<div className={styles.imageWrapper}>
					<img
						src={product.mainImage.url}
						alt='consid commerce image'
						className={styles.mainImage}
					/>

					<div className={styles.altImagesWrapper}>
						{product.alternativeImages.map((altImg) => (
							<img key={altImg.id}src={altImg.url} alt='' className={styles.altImages} />
						))}
					</div>
				</div>

			</div>
		</Layout >
	)
}

const PATHS_QUERY = `
      {
        allProducts {
        id
      }
}
      `
export const getStaticPaths = async () => {
	const productsQuery = await request({
		query: PATHS_QUERY,
	})

	const paths = []
	productsQuery.allProducts.map((p) => paths.push(`/product/${p.id}`))
	return {
		paths,
		fallback: false,
	}
}

const PRODUCT_QUERY = `
      query GetProduct($id: ItemId){
        product(filter: {id: {eq: $id }}) {
        id
    name
      price
      mainImage {
        url
      }
      alternativeImages {
        url
      }
      description {
        value
      }
  }
}
      `
export const getStaticProps = async ({ params }) => {
	const data = await request({
		query: PRODUCT_QUERY,
		variables: { id: params.id },
	})

	return {
		props: {
			data,
		},
	}
}

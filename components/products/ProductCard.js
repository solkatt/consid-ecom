import styles from '../../styles/Products.module.css'
import Link from 'next/link'
import { useRouter } from 'next/router'
//redux
import { useDispatch } from 'react-redux'
import { addToCart } from '../../slices/cartSlice'

// components
import Button from '../Button'

export default function ProductCard({ product }) {
	const dispatch = useDispatch()
	const router = useRouter()
	const handleClick = () => {
		router.push(`/product/${product.id}`)
	}
	return (
		<div key={product.id} className={styles.productCard}>
			<img
				onClick={handleClick}
				src={product.mainImage.url}
				alt=''
				className={styles.productImage}
			/>
			<div className={styles.productDetails}>
				<div style={{ padding: '0.2rem 1rem' }}>
					<h2 className={styles.title} onClick={handleClick}>
						{product.name}
					</h2>
					<p style={{ marginBottom: '1rem' }}>{product.price}:-</p>
				</div>
				<div>
					<Button
						style={{ justifySelf: 'flex-end' }}
						onClick={() => dispatch(addToCart(product))}
					>
						Add to cart
					</Button>
				</div>
			</div>
		</div>
	)
}

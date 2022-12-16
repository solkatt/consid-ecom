import styles from '../styles/Checkout.module.css'
import { useRouter } from 'next/router'
//icons
import SuccessIcon from '../assets/success.svg'

// components
import Layout from '../components/Layout'

export default function Checkout(props) {
	const router = useRouter()
	const products = router.query?.products
		? JSON.parse(router.query?.products)
		: []

	const { total } = router?.query || 0

	return (
		<Layout title={Checkout}>
			<div className={styles.container}>
				<div style={{ width: '8rem', marginBottom: '2rem' }}>
					<SuccessIcon style={{ fill: '#022d41' }} />
				</div>
				<h2 style={{ textAlign: 'center'}}>Thank you for your purchase!</h2>
				<div
					className={styles.reciept}
				>
					<h3>Reciept</h3>
					<div
						className={styles.recieptGrid}
					>
						{products.map((product) => (
							<>
								<p>{product.name}</p>
								<p>{product.quantity}x</p>
								<p style={{ textAlign: 'right' }}>
									{product.quantity * product.price} :-
								</p>
							</>
						))}
					</div>

					<p style={{ marginTop: '1rem', textAlign: 'right', fontSize: '1.2rem' }}>
						{`Total `}
						 <span style={{fontWeight: 'bold'}}>
						{total}:-
						</span>
						</p>
				</div>
			</div>
		</Layout>
	)
}

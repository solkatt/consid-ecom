import { useRouter } from 'next/router'
import Layout from '../components/Layout'
import SuccessIcon from '../assets/success.svg'

export default function Checkout(props) {
	const router = useRouter()
	console.log(router.query)

	const products = router.query?.products
		? JSON.parse(router.query?.products)
		: []

	const { total } = router.query || 0
	console.log(products)

	return (
		<Layout title={Checkout}>
			<div
				style={{
					display: 'flex',
					flexDirection: 'column',
					alignItems: 'center',
					justifyContent: 'center',
				}}
			>
				<div style={{ width: '8rem' }}>
					<SuccessIcon style={{ fill: '#022d41' }} />
				</div>
				<p></p>
				<h2>Thank you for your purchase!</h2>
				<div
					style={{
						width: '80%',
						maxWidth: '500px',
						background: 'white',
						padding: '1rem',
						borderRadius: '10px',
						boxShadow: 'rgba(100,100,100,0.2) 2px 2px 5px',
						marginTop: '3rem',
					}}
				>
					<h3>Reciept</h3>
					<div
						style={{
							display: 'grid',
							alignSelf: 'center',
							gridTemplateColumns: '2fr 1fr 1fr',
							gridTemplateRows: 'auto',
							borderBottom: '1px solid black',
							marginTop: '2rem',
						}}
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

					<p style={{ textAlign: 'right' }}>{total}:-</p>
				</div>
			</div>
		</Layout>
	)
}

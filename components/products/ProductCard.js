import Link from 'next/link'

export default function ProductCard({ product }) {
	return (
		<div
			key={product.id}
			style={{
				maxWidth: '400px',
				background: 'white',
				boxShadow: 'rgba(149, 157, 165, 0.2) 0px 8px 24px;',
				margin: '20px',
				borderRadius: '0 0 30px 30px',
			}}
		>
			<Link href={`/product/${product.id}`}>
				<img
					src={product.mainImage.url}
					alt=''
					style={{ width: '100%', borderRadius: '20px 20px 0 0' }}
				/>
				<div style={{ padding: '0.2rem 1rem' }}>
					<h2>{product.name}</h2>
					<p style={{ marginBottom: '1rem' }}>{product.price}:-</p>
				</div>
			</Link>
		</div>
	)
}

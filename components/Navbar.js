import Link from 'next/link'

export default function Navbar({ cartOpen, toggleCart }) {
	return (
		<nav
			style={{
				position: 'fixed',
				display: 'flex',
				height: '30px',
				width: '100%',
				border: '2px solid green',
				maxWidth: '1500px',
				margin: 'auto',
				padding: '0 2rem',
				justifyContent: 'space-between',
				// padding: '0.5rem 2rem'
			}}
		>
			<div>
				<Link href='/'>Home</Link>
				<Link href='/products' style={{ marginLeft: '10px' }}>
					Products
				</Link>
				<Link href='/products' style={{ marginLeft: '10px' }}>
					About
				</Link>
			</div>
			<div
				style={{
					position: 'absolute',
					transform: 'translateX(-50%)',
					left: '50%',
				}}
			>
				consid ecommerce
			</div>
			<div onClick={toggleCart}>cart</div>
		</nav>
	)
}

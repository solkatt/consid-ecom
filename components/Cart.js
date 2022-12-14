export default function Cart({ cartOpen, toggleCart }) {
	const handleCheckout = (e) => {
		e.stopPropagation()
		alert('checkout')
	}

	return (
		<div
			onClick={toggleCart}
			style={{
				position: 'fixed',
				top: 0,
				left: 0,
				zIndex: 100,
				height: '100vh',
				width: '100vw',
				background: cartOpen ? 'rgba(0,0,0,0.3)' : 'rgba(0,0,0,0.0)',
				pointerEvents: cartOpen ? 'auto' : 'none',
				transition: 'background 0.3s ease-in-out',
			}}
		>
			<div
				style={{
					position: 'absolute',
					top: 0,
					right: 0,
					transform: cartOpen ? 'translateX(0)' : 'translateX(300px)',
					zIndex: 100,
					height: '100vh',
					width: '300px',
					background: 'white',
					transition: 'transform 0.3s ease-in-out',
				}}
			>
				<p onClick={handleCheckout}>checkout</p>
			</div>
		</div>
	)
}

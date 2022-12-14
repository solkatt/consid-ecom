import { useState } from 'react'
import '../styles/globals.css'
import Navbar from '../components/Navbar'
import Cart from '../components/Cart'

import { Lora } from '@next/font/google'

const lora = Lora({
	weight: '400',
	subsets: ['latin'],
})

function MyApp({ Component, pageProps }) {
	const [cartOpen, setCartOpen] = useState(false)

	const toggleCart = () => setCartOpen((prev) => !prev)

	return (
		<>
			<main className={lora.className}>
				<Navbar cartOpen={cartOpen} toggleCart={toggleCart} />
				<Cart cartOpen={cartOpen} toggleCart={toggleCart} />
				<Component {...pageProps} />
			</main>
		</>
	)
}

export default MyApp

import { useState } from 'react'
import Script from 'next/script'
import '../styles/globals.css'
import { store } from './store'
import { Provider } from 'react-redux'

// components
import Navbar from '../components/nav/Navbar'
import Cart from '../components/cart/Cart'

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
			<Provider store={store}>
				<main className={lora.className}>
					<Navbar cartOpen={cartOpen} toggleCart={toggleCart} />
					<Cart cartOpen={cartOpen} toggleCart={toggleCart} />
					<Component {...pageProps} />
				</main>
			</Provider>
		</>
	)
}

export default MyApp

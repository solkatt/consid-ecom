import { useState } from 'react'

import Link from 'next/link'
import ConsidLogo from '../../assets/consid.svg'
import { useRouter } from 'next/router'
import styles from './Navbar.module.css'

// components
import CartIcon from './CartButton'
import Drawer from '../drawer/Drawer'
import Button from '../Button'
// icon
import MenuIcon from '../../assets/menu.svg'

const ROUTES = [
	{
		path: '/',
		title: 'Home',
	},
	{
		path: '/products',
		title: 'Products',
	},
]

export default function Navbar({ cartOpen, toggleCart }) {
	const router = useRouter()
	const [menuOpen, setMenuOpen] = useState(false)

	const handleNavMobile = (path) => {
		if (router.pathname === path) return
		router.push(path)
		setMenuOpen(false)
	}

	return (
		<>
			<div className={styles.mobileshow}>
				<Drawer
					onClose={() => setMenuOpen(false)}
					open={menuOpen}
					width='100vw'
					direction='top'
					background='rgba(2, 45, 65, 0.8)'
				>
					<div className={styles.linkMobile}>
						{ROUTES.map((route) => (
							<p
								key={route.path}
								onClick={() => handleNavMobile(route.path)}
								style={{
									color:
										router.pathname === route.path
											? '#DC0532'
											: 'white',
								}}
							>
								{route.title}
							</p>
						))}
						<Button
							style={{ position: 'absolute', bottom: '2rem' }}
							onClick={() => setMenuOpen(false)}
						>
							Close
						</Button>
					</div>
				</Drawer>
			</div>

			<nav className={styles.navbar}>
				<div>
					<MenuIcon
						className={styles.mobileshow}
						onClick={() => setMenuOpen(true)}
					/>
					<div className={styles.desktopshow}>
						{ROUTES.map((route) => (
							<Link
								key={route.path}
								href={route.path}
								className={
									router.pathname === route.path
										? styles.active
										: styles.link
								}
							>
								{route.title}
							</Link>
						))}
					</div>
				</div>
				<div className={styles.logo}>
					<ConsidLogo />
					{/* consid ecommerce */}
				</div>
				<div onClick={toggleCart}>
					<CartIcon />
				</div>
			</nav>
		</>
	)
}

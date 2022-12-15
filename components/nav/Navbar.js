import { useState } from 'react';

import Link from 'next/link'
import ConsidLogo from "../../assets/consid.svg";
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
		title: 'Home'
	},
	{
		path: '/products',
		title: 'Products'
	},
	{
		path: '/about',
		title: 'About'
	},
]

export default function Navbar({ cartOpen, toggleCart }) {
	const router = useRouter();
	const [menuOpen, setMenuOpen] = useState(false);


	const handleNavMobile = (path) => {
		if (router.pathname === path) return
		router.push(path)
		setMenuOpen(false)
	}

	return (
		<>
			<div className={styles.mobileshow}>
				<Drawer onClose={() => setMenuOpen(false)} open={menuOpen} width="100vw" direction="top" background="rgba(2, 45, 65, 0.8)">

					<div style={{
						width: '100%',
						height: '100%',
						border: '2px solid green',
						justifyContent: 'center',
						alignItems: 'center',
						display: 'flex',
						flexDirection: 'column',
						fontSize: '3rem',
						rowGap: '2rem',
					}}>
						{ROUTES.map((route) => (
							<p key={route.path} onClick={() => handleNavMobile(route.path)} style={{ color: router.pathname === route.path ? '#022d41' : 'white' }}>
								{route.title}
							</p>
						)
						)}
						<Button style={{ position: 'absolute', bottom: '2rem' }} onClick={() => setMenuOpen(false)}>
							Close
						</Button>
					</div>
				</Drawer>
			</div>

			<nav
				style={{
					position: 'fixed',
					display: 'flex',
					height: '80px',
					width: '100%',
					top: 0,
					left: '50%',
					transform: 'translateX(-50%)',
					maxWidth: '1500px',
					margin: 'auto',
					padding: '0 2rem',
					justifyContent: 'space-between',
					alignItems: 'center',
					background: '#FFFEF6',
					zIndex: 1,
					boxShadow: 'rgba(100,100,100,0.1) 0px 3px 10px'


					// padding: '0.5rem 2rem'
				}}
			>
				<div>
					<MenuIcon className={styles.mobileshow} onClick={() => setMenuOpen(true)} />
					<div className={styles.desktopshow}>
						{ROUTES.map((route) =>
							<Link key={route.path} href={route.path} className={router.pathname === route.path ? styles.active : styles.link} >
								{route.title}
							</Link>
						)}
					</div>
				</div>
				<div
					style={{
						position: 'absolute',
						transform: 'translateX(-50%)',
						left: '50%',
						display: 'flex',
						flexDirection: 'column',
						alignItems: 'center',
						background: '#022d41',
						borderRadius: '50%',
						padding: '.5rem'
					}}
				>
					<ConsidLogo />
					{/* consid ecommerce */}
				</div>
				<div onClick={toggleCart}><CartIcon /></div>
			</nav>
		</>
	)
}

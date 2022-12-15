import Link from 'next/link'
// icon
import MenuIcon from '../../../assets/menu.svg'

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

export default function Menu(){

  return (
    <div>
				<MenuIcon className={styles.mobileshow}/>
				<div className={styles.desktopshow}>
				{ROUTES.map((route) =>
					<Link key={route.path} href={route.path} className={router.pathname === route.path ? styles.active : styles.link} >
						{route.title}
					</Link>
				)}
				</div>
			</div>
  )
}
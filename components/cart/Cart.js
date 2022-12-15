import { useRouter } from 'next/router'
import styles from './Cart.module.css'
// icon
import CloseIcon from "../../assets/close.svg";
//redux 
import { useSelector, useDispatch } from 'react-redux'
import { removeFromCart, selectCartItems } from '../../slices/cartSlice'
// components
import Button from '../Button'
import CartItem from './CartItem'
import Drawer from '../drawer/Drawer';

const DRAWER_WIDTH = '400px'
const CHECKOUT_WIDTH = '100px'

export default function Cart({ cartOpen, toggleCart }) {

	const cartItems = useSelector(selectCartItems)
	const router = useRouter()

	const handleCheckout = (e) => {
		toggleCart();
		router.push('/checkout')
	}

	const getTotal = () => {
		let totalQuantity = 0
		let totalPrice = 0
		cartItems.forEach(item => {
			totalQuantity += item.quantity
			totalPrice += item.price * item.quantity
		})
		return { totalPrice, totalQuantity }
	}



	return (

		<Drawer onClose={toggleCart} open={cartOpen}>
			<div className={styles.cart}>
				<div className={styles.cartTop}>
					<p className={styles.cartTitle}>
						Cart
					</p>
					<div className={styles.roundBtn} onClick={toggleCart}>
						<CloseIcon />
					</div>
				</div>
				<div className={styles.cartItems}>
					{cartItems.map((product) =>
						<div key={product.id}>
							<CartItem product={product} />
						</div>
					)}
				</div>

				{!!cartItems.length ? (
					<div className={styles.checkoutContainer}>
						<p onClick={handleCheckout}>checkout</p>
						<div className={styles.orderDetails}>
							<h3>Total:</h3>
							<h3>{getTotal().totalPrice}:-</h3>
						</div>
						{!!cartItems.length && (
							<Button onClick={handleCheckout} style={{ width: '100%' }}>Checkout</Button>
						)}
					</div>
				) : (
					<div style={{ height: '100%', alignSelf: 'center'}}>
						No products here yet..
					</div>
				)}
			</div>
		</Drawer>


	)
}

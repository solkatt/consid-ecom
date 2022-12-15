//redux 
import { useSelector } from 'react-redux'
import { selectCartItems } from '../../slices/cartSlice'
import CartIcon from "../../assets/cart.svg"
import styles from './CartButton.module.css'
export default function CartButton() {
  const cartItems = useSelector(selectCartItems);

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

    <div className={styles.container}>
      {/* <div style={{
      background: 'white',
      borderRadius: '50%',
      padding: '0.5rem',
      boxSizing: 'content-box',
      cursor: 'pointer',
      width: '2rem',
      height: '2rem',
      '&:hover:': {
        background: 'red'
      }
    }}> */}
      <CartIcon />
      {getTotal().totalQuantity > 0 && (
        <div className={styles.badge}>
          <p>{getTotal().totalQuantity}</p>
        </div>
      )}
    </div>

  )


}
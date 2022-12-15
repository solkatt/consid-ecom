import styles from './CartItem.module.css'

//redux 
import { useDispatch } from 'react-redux'
import { removeFromCart } from '../../slices/cartSlice'
//icon
import DeleteIcon from '../../assets/delete.svg'

// components
import Button from '../Button'

export default function CartItem({ product }) {
  const dispatch = useDispatch()

  return (
    <div className={styles.cartItem}>
      <div style={{ maxWidth: '9rem' }}>
        <img src={product.mainImage.url} alt={`Product in cart, ${product.name}`} className={styles.image} />
      </div>
      <div className={styles.itemDetails}>
        <div style={{ height: '100%', display: 'flex', flexDirection: 'column', justifyContent: 'space-evenly' }}>
          <p style={{ fontWeight: '900' }}>{product.name}</p>
          <p style={{ fontWeight: 'bold'}}>{product.price * product.quantity} :-</p>
          <p>{product.quantity}x</p>
        </div>
        <div className={styles.quantity}>
        </div>
        <div className={styles.roundBtn}>
          <DeleteIcon onClick={() => dispatch(removeFromCart(product))} style={{ height: '1.1rem' }} />
        </div>
      </div>
    </div>
  )
}
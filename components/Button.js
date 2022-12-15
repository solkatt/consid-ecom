import styles from './Button.module.css'

export default function Button({
  onClick,
  style,
  children
}) {

  return (
    <button
      onClick={onClick}
      style={style}
      className={styles.button}>
      {children}
    </button>
  )
}
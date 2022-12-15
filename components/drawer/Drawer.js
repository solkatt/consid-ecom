import styles from './Drawer.module.css'

export default function Drawer({ onClose, open, width = '400px', direction = 'right', background = 'white', children }) {
  const backdropStyle = {
      background: open ? 'rgba(0,0,0,0.3)' : 'rgba(0,0,0,0.0)',
      pointerEvents: open ? 'auto' : 'none',
      transition: 'background 0.3s ease-in-out'
  }

  const containerStyle = {
    top: {
      transform: open ? 'translateY(0)' : `translateY(-100%)`,
      width: width,
      transition: 'transform 0.3s ease-in-out',
      background: background
    },
    right: {
      transform: open ? 'translateX(0)' : `translateX(${width})`,
      width: width,
      transition: 'transform 0.3s ease-in-out',
      background: background
    }
  }

  return (
    <div
      onClick={onClose}
      // onClick={() => alert('hej')}
      style={backdropStyle}
      className={styles.backdrop}
    >
      <div
        onClick={(e) => e.stopPropagation()}
        className={styles.container}
        style={containerStyle[direction]}
      >
        {children}
      </div>
    </div>
  )
}
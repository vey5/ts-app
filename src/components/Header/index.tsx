import styles from './styles.module.scss'
import { useState } from 'react'
import classnames from 'classnames'
import { Menu } from '../Menu'

const Header = () => {
  const [isOpen, setOpen] = useState(false)

  return (
    <div className={classnames(styles.headerBase, styles.header)}>
      <h1 className={styles.title}>MERCH STORE</h1>
      <div className={styles.button}>
        <button onClick={() => setOpen(!isOpen)}>Категории</button>
      </div>
      <Menu isOpen={isOpen} />
    </div>
  )
}

export { Header }

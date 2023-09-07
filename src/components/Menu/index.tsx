import { FC } from 'react'
import styles from './styles.module.scss'

type Props = {
  isOpen: boolean
}

const Menu: FC<Props> = ({ isOpen }) => {
  if (!isOpen) {
    return null
  }

  return <div className={styles.modal}>menu</div>
}

export { Menu }

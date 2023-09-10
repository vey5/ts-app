import { FC } from 'react'
import styles from './styles.module.scss'
import { Portal } from '../Portal'

type Props = {
  isOpen: boolean
}

const Menu: FC<Props> = ({ isOpen }) => {
  if (!isOpen) {
    return null
  }

  return (
    <Portal>
      <div className={styles.modal}>menu</div>
    </Portal>
  )
}

export { Menu }

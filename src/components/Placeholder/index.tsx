import styles from './styles.module.scss'
import { FC } from 'react'

const Placeholder: FC = () => {
  return (
    <div className={styles.fail}>
      <p>Нет данных</p>
    </div>
  )
}

export { Placeholder }

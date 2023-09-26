import styles from './styles.module.scss'
import { FC } from 'react'
import { LoaderIcon } from '../../icons/LoaderIcon'

const Loader: FC = () => {
  return (
    <div className={styles.circle}>
      <LoaderIcon />
    </div>
  )
}

export { Loader }

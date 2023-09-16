import { FC, PropsWithChildren } from 'react'
import styles from './styles.module.scss'
import { Header } from '../Header'
import { Footer } from '../Footer'

const Page: FC<PropsWithChildren> = ({ children }) => {
  return (
    <div className={styles.page}>
      <Header />
      <div className={styles.content}>{children}</div>
      <Footer />
    </div>
  )
}

export { Page }

import styles from './styles.module.scss'
import { FC, PropsWithChildren } from 'react'
import { useEffect } from 'react'
import { createPortal } from 'react-dom'

const Portal: FC<PropsWithChildren> = ({ children }) => {
  const mount = window.document.body
  const el = document.createElement('div')

  useEffect(() => {
    mount.appendChild(el)
    return () => {
      mount.removeChild(el)
    }
  }, [el, mount])

  return <div className={styles.portal}>{createPortal(children, el)}</div>
}

export { Portal }

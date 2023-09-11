import { FC } from 'react'
import styles from './styles.module.scss'
import { Portal } from '../../pages/Portal'
import { useState, useEffect } from 'react'
import { сategories } from '../../types/api'

type Props = {
  isOpen: boolean
}

const Menu: FC<Props> = ({ isOpen }) => {
  const [сategories, setCategories] = useState<сategories>()

  useEffect(() => {
    fetch('https://dummyjson.com/products/categories')
      .then((res) => res.json())
      .then((data: сategories) => {
        setCategories(data)
      })
  }, [])

  if (!isOpen) {
    return null
  }

  return (
    <Portal>
      <div className={styles.modal}>
        {сategories?.map((string) => <div className={styles.category}>{string}</div>)}
      </div>
    </Portal>
  )
}

export { Menu }

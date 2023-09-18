import { FC } from 'react'
import styles from './styles.module.scss'
import { Portal } from '../../pages/Portal'
import { useState, useEffect } from 'react'
import { Сategories } from '../../types/api'
import { Link } from 'react-router-dom'
import { Loader } from '../Loader'

type Props = {
  isOpen: boolean
}

const Menu: FC<Props> = ({ isOpen }) => {
  const [categories, setCategories] = useState<Сategories>()
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    fetch(`https://dummyjson.com/products/categories`)
      .then((res) => res.json())
      .then((data: Сategories) => {
        setCategories(data)
        setIsLoading(false)
      })
  }, [])

  if (!isOpen) {
    return null
  }

  return (
    <Portal>
      <div className={styles.modal}>
        {isLoading ? (
          <Loader />
        ) : (
          categories?.map((category) => (
            <Link className={styles.link} key={category} to={`/category/${category}`}>
              <div className={styles.category}>{category}</div>
            </Link>
          ))
        )}
      </div>
    </Portal>
  )
}

export { Menu }

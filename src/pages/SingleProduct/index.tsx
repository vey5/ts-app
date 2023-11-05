import styles from './styles.module.scss'
import { useState, useEffect, FC } from 'react'
import { useParams } from 'react-router-dom'
import { Page } from '../../components/Page'
import { Loader } from '../../components/Loader'
import { Product } from '../../types/api'
import { Placeholder } from '../../components/Placeholder'
import { Slider } from '../../components/Slider'

const SingleProduct: FC = () => {
  const [products, setProducts] = useState<Product>()
  const { id } = useParams()
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    fetch(`https://dummyjson.com/products/${id}`)
      .then((res) => res.json())
      .then(
        (data: Product) => {
          setProducts(data)
          setIsLoading(false)
        },
        () => {
          setIsLoading(false)
        }
      )
  }, [id])

  if (!isLoading && !products) {
    return (
      <div className={styles.placeholder}>
        <Placeholder />
      </div>
    )
  }

  if (isLoading) {
    return (
      <div className={styles.loader}>
        <Loader />
      </div>
    )
  }

  return (
    <Page>
      <div className={styles.singleProduct}>
        <h1 className={styles.title}>{products?.title}</h1>
        <div className={styles.price}>Price: {products?.price}$</div>
        <p className={styles.desc}>{products?.description}</p>
        <Slider imgs={products?.images ?? []} />
        <div className={styles.rating}>Rating: {products?.rating}</div>
      </div>
    </Page>
  )
}

export { SingleProduct }

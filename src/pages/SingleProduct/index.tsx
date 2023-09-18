import styles from './styles.module.scss'
import { useState, useEffect, FC } from 'react'
import { useParams } from 'react-router-dom'
import { Page } from '../../components/Page'
import { Loader } from '../../components/Loader'
import { Product } from '../../types/api'

const InfoCard: FC = () => {
  const [products, setProducts] = useState<Product>()
  const { id } = useParams()
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    fetch(`https://dummyjson.com/products/${id}`)
      .then((res) => res.json())
      .then((data: Product) => {
        setProducts(data)
        setIsLoading(false)
      })
  }, [id])

  return (
    <Page>
      {isLoading ? (
        <Loader />
      ) : (
        <div className={styles.singleProduct}>
          <h1 className={styles.title}>{products?.title}</h1>
          <div className={styles.price}>Price: {products?.price}$</div>
          <p className={styles.desc}>{products?.description}</p>
          <div>
            <img className={styles.img} src={products?.images[1]} alt="title" />
          </div>
          <div className={styles.rating}>Rating: {products?.rating}</div>
        </div>
      )}
    </Page>
  )
}

export default InfoCard

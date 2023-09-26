import styles from './styles.module.scss'
import { FC } from 'react'
import { useState, useEffect } from 'react'
import { ProductsResponse } from '../../types/api'
import { Card } from '../Card'
import { useParams } from 'react-router-dom'
import { Page } from '../Page'
import { Loader } from '../Loader'
import { Placeholder } from '../Placeholder'

const Category: FC = () => {
  const [productsResponse, setProductsResponse] = useState<ProductsResponse>()
  const { category } = useParams()
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    fetch(`https://dummyjson.com/products/category/${category}`)
      .then((res) => res.json())
      .then(
        (data: ProductsResponse) => {
          setProductsResponse(data)
          setIsLoading(false)
        },
        () => {
          setIsLoading(false)
        }
      )
  }, [category])

  if (!isLoading && !productsResponse?.products.length) {
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
      <div className={styles.category}>
        {productsResponse?.products.map((item) => (
          <Card title={item.title} img={item.images[1]} id={item.id} key={item.id} />
        ))}
      </div>
    </Page>
  )
}

export { Category }

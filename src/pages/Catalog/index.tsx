import styles from './styles.module.scss'
import { FC, useState, useEffect } from 'react'
import { Card } from '../../components/Card'
import { Page } from '../../components/Page'
import { ProductsResponse } from '../../types/api'
import { Loader } from '../../components/Loader'

const Catalog: FC = () => {
  const [productsResponse, setProductsResponse] = useState<ProductsResponse>()
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    fetch('https://dummyjson.com/products')
      .then((res) => res.json())
      .then((data: ProductsResponse) => {
        setProductsResponse(data)
        setIsLoading(false)
      })
  }, [])

  return (
    <Page>
      <div className={styles.container}>
        {isLoading ? (
          <Loader />
        ) : (
          productsResponse?.products.map((item) => (
            <Card title={item.title} img={item.images[1]} key={item.id} id={item.id} />
          ))
        )}
      </div>
    </Page>
  )
}

export { Catalog }

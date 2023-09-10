import styles from './styles.module.scss'
import { useState, useEffect } from 'react'
import { Card } from '../../components/Card'
import { Page } from '../../components/Page'
import { ProductsResponse } from '../../types/api'

const Catalog = () => {
  const [productsResponse, setProductsResponse] = useState<ProductsResponse>()

  useEffect(() => {
    fetch('https://dummyjson.com/products')
      .then((res) => res.json())
      .then((data: ProductsResponse) => {
        setProductsResponse(data)
      })
  }, [])

  return (
    <Page>
      <div className={styles.container}>
        {productsResponse?.products.map((item) => (
          <Card title={item.title} img={item.images[1]} key={item.id} id={item.id} />
        ))}
      </div>
    </Page>
  )
}

export { Catalog }

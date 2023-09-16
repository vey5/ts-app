import styles from './styles.module.scss'
import { FC } from 'react'
import { useState, useEffect } from 'react'
import { ProductsResponse } from '../../types/api'
import { Card } from '../Card'
import { useParams } from 'react-router-dom'
import { Page } from '../Page'

const Category: FC = () => {
  const [productsResponse, setProductsResponse] = useState<ProductsResponse>()
  const { category } = useParams()
  useEffect(() => {
    fetch(`https://dummyjson.com/products/category/${category}`)
      .then((res) => res.json())
      .then((data: ProductsResponse) => {
        setProductsResponse(data)
      })
  }, [category])
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

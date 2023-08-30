import styles from './styles.module.scss'
import { useState, useEffect } from 'react'
import Card from '../Card'

type ProductsResponse = {
  products: Product[]
  total: number
  skip: number
  limit: number
}

type Product = {
  id: number
  title: string
  description: string
  price: number
  discountPersentage: number
  rating: number
  stock: number
  brand: string
  category: string
  thumbnail: ' '
  images: string[]
}

console.log()

const Container = () => {
  const [productsResponse, setProductsResponse] = useState<ProductsResponse>()

  useEffect(() => {
    fetch('https://dummyjson.com/products')
      .then((res) => res.json())
      .then((data: ProductsResponse) => {
        setProductsResponse(data)
      })
  }, [])

  return (
    <div className={styles.container}>
      {productsResponse?.products.map((item) => (
        <Card title={item.title} img={item.images[1]} key={item.id} id={item.id} />
      ))}
    </div>
  )
}

export default Container

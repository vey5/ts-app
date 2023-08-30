import styles from './styles.module.scss'
import { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'

type Products = {
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

const InfoCard = () => {
  const [products, setProducts] = useState<Products>()
  const { id } = useParams()

  useEffect(() => {
    fetch(`https://dummyjson.com/products/${id}`)
      .then((res) => res.json())
      .then((data: Products) => {
        setProducts(data)
      })
  }, [id])

  return (
    <div className={styles.infoCard}>
      <h1 className={styles.title}>{products?.title}</h1>
      <div className={styles.price}>Price: {products?.price}$</div>
      <p className={styles.desc}>{products?.description}</p>
      <div>
        <img className={styles.img} src={products?.images[1]} alt="title" />
      </div>
      <div className={styles.rating}>Rating: {products?.rating}</div>
    </div>
  )
}

export default InfoCard

import styles from './styles.module.scss'
import { FC, useState, useEffect } from 'react'
import { Card } from '../../components/Card'
import { Page } from '../../components/Page'
import { ProductsResponse } from '../../types/api'
import { Loader } from '../../components/Loader'
import { Placeholder } from '../../components/Placeholder'

const Catalog: FC = () => {
  const [productsResponse, setProductsResponse] = useState<ProductsResponse>()
  const [isLoading, setIsLoading] = useState(true)
  const [offset, setOffset] = useState(0)
  const [fetching, setFetching] = useState(true)

  useEffect(() => {
    fetch(`https://dummyjson.com/products`)
      .then((res) => res.json())
      .then((data: ProductsResponse) => {
        setProductsResponse(data)
        setIsLoading(false)
        // setOffset((prevState) => prevState + 1)
      })
  }, [])

  const scrollHandler = (e: any) => {
    if (
      e.target.documentElement.scrollHeight -
        (e.target.documentElement.scrollTop + window.innerHeight) <
      100
    ) {
      setFetching(true)
    }
  }

  useEffect(() => {
    document.addEventListener('scroll', scrollHandler)

    return function () {
      document.removeEventListener('scroll', scrollHandler)
    }
  }, [])

  if (!isLoading && productsResponse?.products.length === 0) {
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
      <div className={styles.container}>
        {productsResponse?.products.map((item) => (
          <Card title={item.title} img={item.images[1]} key={item.id} id={item.id} />
        ))}
      </div>
    </Page>
  )
}

export { Catalog }

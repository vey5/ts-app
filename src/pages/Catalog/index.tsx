import styles from './styles.module.scss'
import { FC, useState, useEffect } from 'react'
import { Card } from '../../components/Card'
import { Page } from '../../components/Page'
import { ProductsResponse, Product } from '../../types/api'
import { Loader } from '../../components/Loader'
import { Placeholder } from '../../components/Placeholder'
import { SearchIcon } from '../../icons/SearchIcon'

const Catalog: FC = () => {
  const [products, setProducts] = useState<Product[]>([])
  // const [total, setTotal] = useState(0)
  const [search, setSearch] = useState('')
  const [isLoading, setIsLoading] = useState(false)
  const [skip, setSkip] = useState(0)

  const requestLimit = 10

  // const getData = () => {
  //   setIsLoading(true)
  //   fetch(`https://dummyjson.com/products?limit=${requestLimit}&skip=${skip}`)
  //     .then((res) => res.json())
  //     .then(
  //       (data: ProductsResponse) => {
  //         setProducts([...products, ...data.products])

  //         setTotal(data.total)
  //         setSkip(skip + requestLimit)
  //         setIsLoading(false)
  //       },
  //       () => {
  //         setIsLoading(false)
  //       }
  //     )
  // }
  useEffect(() => {
    fetch(`https://dummyjson.com/products?limit=${requestLimit}&skip=${skip}`)
      .then((res) => res.json())
      .then(
        (data: ProductsResponse) => {
          setProducts([...products, ...data.products])
          setSkip((prevState) => prevState)
          setIsLoading(false)
        },
        () => {
          setIsLoading(false)
        }
      )
  }, [skip])

  useEffect(() => {
    setIsLoading(true)
    fetch(`https://dummyjson.com/products/search?q=${search}`)
      .then((res) => res.json())
      .then(
        (data: ProductsResponse) => {
          setProducts(data.products)

          setIsLoading(false)
        },
        () => {
          setIsLoading(false)
        }
      )
  }, [search])

  // const scrollHandler = (event: Event) => {
  //   if (isLoading) return

  //   const { scrollTop, clientHeight, scrollHeight } = document.documentElement

  //   if (scrollTop + clientHeight >= scrollHeight - 20) {
  //     getData()
  //   }
  // }

  // useEffect(() => {
  //   document.addEventListener('scroll', scrollHandler)

  //   return function () {
  //     document.removeEventListener('scroll', scrollHandler)
  //   }
  // }, [])

  // useEffect(() => {
  //   getData()
  // }, [])

  // if (!isLoading && !products.length) {
  //   return (
  //     <div className={styles.placeholder}>
  //       <Placeholder />
  //     </div>
  //   )
  // }

  if (!isLoading && !products) {
    return (
      <div className={styles.placeholder}>
        <Placeholder />
      </div>
    )
  }

  // if (!search && isLoading) {
  //   return (
  //     <div className={styles.loader}>
  //       <Loader />
  //     </div>
  //   )
  // }

  return (
    <Page>
      <div className={styles.searchBar}>
        <div className={styles.search}>
          <input
            className={styles.input}
            placeholder="Поиск"
            value={search}
            onChange={(event) => setSearch(event.target.value)}
          />
          <div className={styles.icon}>
            <SearchIcon />
          </div>
        </div>
      </div>
      <div className={styles.container}>
        {products.map((item) => (
          <Card title={item.title} img={item.images[1]} key={item.id} id={item.id} />
        ))}
      </div>
      {!search && (
        <div className={styles.paginate} onClick={() => setSkip(skip + 10)}>
          Download
        </div>
      )}
      <div className={styles.loader}>{isLoading && <Loader />}</div>
    </Page>
  )
}

export { Catalog }

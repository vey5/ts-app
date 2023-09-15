export type ProductsResponse = {
  products: Product[]
  total: number
  skip: number
  limit: number
}

export type Product = {
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

export type Сategories = string[]

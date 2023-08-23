



import styles from './styles.module.scss'
import { useState, useEffect } from 'react';

type ProductsResponse = {
    products: Product[];
    total: number;
    skip: number;
    limit: number;
}

type Product = {
     id: number;
     title: string;
     description: string;
     price: number;
     discountPersentage: number;
     rating: number;
     stock: number;
     brand: string;
     category: string;
     thumbnail: " ";
     images: string[]
     
}

console.log()

const Container = () => {
const [ productsResponse, setProductsResponse] = useState<ProductsResponse>()

useEffect (() => {
    fetch('https://dummyjson.com/products/?q=phone')
    .then(res => res.json())
    .then((data:ProductsResponse) =>  {
         setProductsResponse(data)
             
    })
       
}, []  )
 
    return (
       <div className={styles.container}>
         {productsResponse?.products.map(item =><div key={item.id}>{item.title}</div>)}
       </div>
       
    )
}

export default Container;
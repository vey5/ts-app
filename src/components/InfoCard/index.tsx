import styles from './styles.module.scss'
import { useState, useEffect } from 'react';

type Products = {
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



const InfoCard = () => {
const [products, setProducts] = useState<Products>()

useEffect (() => {
    fetch('https://dummyjson.com/products/5')
   .then(res => res.json())
   .then((data:Products) => {
        setProducts(data)
        
   })
   
}, [] )




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

export default InfoCard;



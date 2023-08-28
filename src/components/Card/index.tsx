import styles from './styles.module.scss'

type Props = {
  title: string
  img: string
  
}

const Card =({title, img,}: Props) => {

    return (
        <div className={styles.card}>
            <div className={styles.image}>
              <img className={styles.img} src={img} alt={title}/>
              <div className={styles.title}>{title}</div>
              
            </div>
            
        </div>
        
        
    )
}

export default Card;
import styles from './styles.module.scss'
import { Link } from 'react-router-dom'

type Props = {
  title: string
  img: string
  id: number
}

const Card =({title, img, id}: Props) => {

    return (
        <Link to={`/catalog/${id}`}>
        <div className={styles.card}>
            <div className={styles.image}>
              <img className={styles.img} src={img} alt={title}/>
              <div className={styles.title}>{title}
              </div>
            </div>
        </div>
        </Link>
        
        
    )
}

export default Card;
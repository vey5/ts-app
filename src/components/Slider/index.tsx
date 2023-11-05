import styles from './styles.module.scss'
import SwipeableViews from 'react-swipeable-views'
import { FC, useState } from 'react'
import classNames from 'classnames'

type Props = {
  imgs: string[]
}

const Slider: FC<Props> = ({ imgs }) => {
  const [index, setIndex] = useState(0)

  // if (index < 0) {
  //   setIndex(+1)
  // }

  // if (index > 0) {
  //   setIndex(-1)
  // }

  return (
    <div className={styles.slider}>
      <SwipeableViews enableMouseEvents index={index}>
        {imgs.map((string) => (
          <div key={string} className={styles.slide}>
            <img className={styles.img} src={string} alt="title" />
          </div>
        ))}
      </SwipeableViews>
      <div
        className={classNames(styles.arrow, styles.arrowLeft)}
        onClick={() => {
          console.log(index)
          if (index <= 0) return
          setIndex(index - 1)
        }}>
        {'<'}
      </div>
      <div
        className={classNames(styles.arrow, styles.arrowRight)}
        onClick={() => {
          console.log(index)
          if (index >= imgs.length - 1) return
          setIndex(index + 1)
        }}>
        {'>'}
      </div>
    </div>
  )
}

export { Slider }

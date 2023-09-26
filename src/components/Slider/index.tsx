import styles from './styles.module.scss'
// import SwipeableViews from 'react-swipeable-views'
import { FC } from 'react'
import { Style } from 'util'

const Style = {
  slide: {
    padding: 15,
    minHeight: 100,
    color: '#fff',
  },
  slide1: {
    background: '#FEA900',
  },
  slide2: {
    background: '#B3DC4A',
  },
  slide3: {
    background: '#6AC0FF',
  },
}

const Slider: FC<Style> = () => {
  return <div className={styles.slider}></div>
}

const style = {
  slide: {
    padding: 15,
    minHeight: 100,
    color: '#fff',
  },
  slide1: {
    background: '#FEA900',
  },
  slide2: {
    background: '#B3DC4A',
  },
  slide3: {
    background: '#6AC0FF',
  },
}

export { Slider }

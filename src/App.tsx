import styles from './styles.module.scss'
import { Routes, Route } from 'react-router-dom'
import { Catalog } from './pages/Catalog'
import SingleProduct from './pages/SingleProduct'
import { Menu } from './components/Menu'

function App() {
  return (
    <div className={styles.wrapper}>
      <Routes>
        {/* <Route path="catalog/:title" element={<Menu isOpen={false}/>} /> */}
        <Route path="/catalog" element={<Catalog />} />
        <Route path="catalog/:id" element={<SingleProduct />} />
      </Routes>
    </div>
  )
}

export default App

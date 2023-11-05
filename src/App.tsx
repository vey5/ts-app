import styles from './styles.module.scss'
import { Routes, Route } from 'react-router-dom'
import { Catalog } from './pages/Catalog'
import { SingleProduct } from './pages/SingleProduct'
import { Category } from './components/Category'

function App() {
  return (
    <div className={styles.wrapper}>
      <Routes>
        <Route path="/category/:category" element={<Category />} />
        <Route path="/" element={<Catalog />} />
        <Route path="/catalog/:id" element={<SingleProduct />} />
      </Routes>
    </div>
  )
}

export default App

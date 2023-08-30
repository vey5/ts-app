import styles from './styles.module.scss'
import { Routes, Route } from 'react-router-dom'
import Container from './components/Container';
import InfoCard from './components/InfoCard';


function App() {
  return (
    <div className={styles.wrapper}>
      <Routes>
         <Route path='/catalog' element={<Container />} />
         <Route path='catalog/:id' element={<InfoCard />} />
      </Routes>
      
    </div>
  );
}

export default App;

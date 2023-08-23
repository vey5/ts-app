import styles from './styles.module.scss'
import Container from './components/Container';
import Card from './components/Card';

function App() {
  return (
    <div className={styles.wrapper}>
      <Container />
      <Card />
    </div>
  );
}

export default App;

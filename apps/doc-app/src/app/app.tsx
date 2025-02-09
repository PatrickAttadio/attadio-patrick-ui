import styles from './app.module.css';
import { Header } from '@attadio-patrick-ui/header';
import { Hero } from '@attadio-patrick-ui/hero';
import { Content } from '@attadio-patrick-ui/content';

export function App() {
  return (
    <div className={styles.app}>
      <Header />
      <Hero />
      <Content />
    </div>
  );
}

export default App;

// eslint-disable-next-line @typescript-eslint/no-unused-vars
import styles from './app.module.css';
// import { Button } from '@attadio-patrick-ui/button';
import { Header } from '@attadio-patrick-ui/header';
import { Hero } from '@attadio-patrick-ui/hero';
import { Content } from '@attadio-patrick-ui/content';

export function App() {
  return (
    <div>
      <Header />
      <Hero />
      <Content />
      {/* <Button label='Cliccami' className='color' onClick={() => console.log('Cliccato!')} /> */}
    </div>
  );
}

export default App;

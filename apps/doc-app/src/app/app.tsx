// eslint-disable-next-line @typescript-eslint/no-unused-vars
import styles from './app.module.css';
import { Button } from '@attadio-patrick-ui/button';

export function App() {
  return (
    <div>
      <Button label='Cliccami' className='color' onClick={() => console.log('Cliccato!')} />
    </div>
  );
}

export default App;

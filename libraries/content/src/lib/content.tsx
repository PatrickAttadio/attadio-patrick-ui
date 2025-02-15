import { TabButton, tabs } from '@attadio-patrick-ui/button';
import { Card } from '@attadio-patrick-ui/card';
import { Grid } from '@attadio-patrick-ui/grid';
import { Sidebar } from '@attadio-patrick-ui/sidebar';
import { Navbar } from '@attadio-patrick-ui/navbar';
import { Footer } from '@attadio-patrick-ui/footer';
import styles from './content.module.css';

export function Content() {
  return (
    <div className={styles.container}>

      <h1 className={styles.title}>Button</h1>
      <TabButton className={styles.tabComponent} tabs={tabs} />

      <h1 className={styles.title}>Card</h1>
      <Card />

      <h1 className={styles.title}>Grid</h1>
      <Grid />

      <h1 className={styles.title}>Sidebar</h1>
      <Sidebar />

      <h1 className={styles.title}>Navbar</h1>
      <Navbar />

      <h1 className={styles.title}>Footer</h1>
      <Footer />
    </div>
  );
}

export default Content;

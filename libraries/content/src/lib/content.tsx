import { TabButton } from '@attadio-patrick-ui/button';
import { Card } from '@attadio-patrick-ui/card';
import { Grid } from '@attadio-patrick-ui/grid';
import { Sidebar } from '@attadio-patrick-ui/sidebar';
import { Navbar } from '@attadio-patrick-ui/navbar';
import { Footer } from '@attadio-patrick-ui/footer';
import styles from './content.module.css';

export function Content() {
  const codeExample = `
    import styles from './button.module.css';

    type ButtonProps = {
      className?: string;
      label?: string;
      onClick?: () => void;
    };

    export function Button({ className, label, onClick }: ButtonProps) {
      return (
        <button className={\`\${styles.button} \${className}\`} onClick={onClick}>
          {label}
        </button>
      );
    };

    export default Button;
  `;

  const tabs = [
    {
      label: 'Demo',
      content: (
        <div className={styles.demo}>
          <button className={styles.primaryButton} onClick={() => alert('Primary Button Clicked')}>
            Primary
          </button>
        </div>
      ),
    },
    {
      label: 'Code',
      content: (
        <pre className={styles.codeBlock}>
          <code>{codeExample}</code>
        </pre>
      ),
    },
  ];

  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Button</h1>
      <TabButton className={styles.tabComponent} tabs={tabs} />
      <Card />
      <Grid />
      <Sidebar />
      <Navbar />
      <Footer />
    </div>
  );
}

export default Content;

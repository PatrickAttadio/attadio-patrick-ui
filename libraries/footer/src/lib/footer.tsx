import { useState } from 'react';
import styles from './footer.module.css';

const codeExample = `
  import styles from './footer.module.css';

  export function Footer() {
    return (
      <footer className={styles.footer}>
        <h2>Stay Connected</h2>
        <p>© 2025 Movie App. All rights reserved.</p>
      </footer>
    );
  };

  export default Footer;
`;

const tabs = [
  {
    label: 'Demo',
    content: (
      <div className={styles.demo}>
        <footer className={styles.footer}>
          <h2>Stay Connected</h2>
          <p>© 2025 Movie App. All rights reserved.</p>
        </footer>
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

export function Footer() {
  const [activeTab, setActiveTab] = useState(0);

  return (
    <div className={styles.container}>
      <div className={styles.tabs}>
        {tabs.map((tab, index) => (
          <button
            key={index}
            className={`${styles.tab} ${activeTab === index ? styles.activeTab : ''}`}
            onClick={() => setActiveTab(index)}
          >
            {tab.label}
          </button>
        ))}
      </div>
      <div className={styles.tabContent}>{tabs[activeTab].content}</div>
    </div>
  );
}

export default Footer;

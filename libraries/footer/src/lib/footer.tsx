import { useState } from 'react';
import styles from './footer.module.css';

const codeExample = `
  import styles from './footer.module.css';

  export function Footer({ title, content }) {
    return (
      <div className={styles.footer}>
        <h2>{title}</h2>
        <p>{content}</p>
      </div>
    );
  };

  export default Footer;
`;

const tabs = [
  {
    label: 'Demo',
    content: (
      <div className={styles.demo}>
        <div className={styles.footer}>
          <h2>Example Footer</h2>
          <p>This is an example of a simple footer .</p>
        </div>
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
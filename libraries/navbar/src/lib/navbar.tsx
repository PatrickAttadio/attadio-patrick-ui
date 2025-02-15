import { useState } from 'react';
import styles from './navbar.module.css';

const codeExample = `
  import styles from './navbar.module.css';

  export function Navbar({ title, content }) {
    return (
      <div className={styles.navbar}>
        <h2>{title}</h2>
        <p>{content}</p>
      </div>
    );
  };

  export default Navbar;
`;

const tabs = [
  {
    label: 'Demo',
    content: (
      <div className={styles.demo}>
        <div className={styles.navbar}>
          <h2>Example Navbar</h2>
          <p>This is an example of a simple navbar .</p>
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

export function Navbar() {
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

export default Navbar;
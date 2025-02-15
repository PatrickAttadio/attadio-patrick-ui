import { useState } from 'react';
import styles from './card.module.css';

const codeExample = `
  import styles from './card.module.css';

  export function Card({ image, title, content }) {
    return (
      <div className={styles.card}>
        <img src={image} alt={title} className={styles.cardImage} />
        <div className={styles.cardContent}>
          <h2>{title}</h2>
          <p>{content}</p>
        </div>
      </div>
    );
  };

  export default Card;
`;

const tabs = [
  {
    label: 'Demo',
    content: (
      <div className={styles.demo}>
        <div className={styles.card}>
          <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSVFxhq_CO4XB0GJfCRbH5q-Zu-g4K--tZ53A&s" alt="Example" className={styles.cardImage} />
          <div className={styles.cardContent}>
            <h2>Example Card</h2>
            <p>This is an example of a simple card component.</p>
          </div>
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

export function Card() {
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

export default Card;

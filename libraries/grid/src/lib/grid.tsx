import { useState } from 'react';
import styles from './grid.module.css';

const codeExample = `
  import styles from './grid.module.css';

  export function Grid() {
    return (
      <div className={styles.gridContainer}>
        {/* Grid 1: 3 Columns (col-4 col-4 col-4) */}
        <div className={styles.gridThreeColumns}>
          <div className={styles.gridItem}>Column 1</div>
          <div className={styles.gridItem}>Column 2</div>
          <div className={styles.gridItem}>Column 3</div>
        </div>

        {/* Grid 2: col-6 col-3 col-3 */}
        <div className={styles.gridMixedColumns}>
          <div className={styles.gridItemLarge}>Large Column</div>
          <div className={styles.gridItemSmall}>Small Column</div>
          <div className={styles.gridItemSmall}>Small Column</div>
        </div>

        {/* Grid 3: Spanning Columns */}
        <div className={styles.gridSpanning}>
          <div className={styles.gridSpanItem}>Spanning Column 1</div>
          <div className={styles.gridSpanItem}>Spanning Column 2</div>
        </div>
      </div>
    );
  };

  export default Grid;
`;

const tabs = [
  {
    label: 'Demo',
    content: (
      <div className={styles.demo}>
        {/* Grid 1: 3 Columns */}
        <div className={styles.gridThreeColumns}>
          <div className={styles.gridItem}>Column 1</div>
          <div className={styles.gridItem}>Column 2</div>
          <div className={styles.gridItem}>Column 3</div>
        </div>

        {/* Grid 2: Mixed Columns */}
        <div className={styles.gridMixedColumns}>
          <div className={styles.gridItemLarge}>Large Column</div>
          <div className={styles.gridItemSmall}>Small Column</div>
          <div className={styles.gridItemSmall}>Small Column</div>
        </div>

        {/* Grid 3: Spanning Columns */}
        <div className={styles.gridSpanning}>
          <div className={styles.gridSpanItem}>Spanning Column 1</div>
          <div className={styles.gridSpanItem}>Spanning Column 2</div>
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

export function Grid() {
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

export default Grid;

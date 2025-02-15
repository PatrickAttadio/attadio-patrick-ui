import { useState } from 'react';
import styles from './button.module.css';

type ButtonProps = {
  className?: string;
  label?: string;
};

type TabButtonProps = {
  className?: string;
  tabs: { label: string; content: React.ReactNode }[];
};

export function Button({ className, label }: ButtonProps) {
  return (
    <button className={`${styles.button} ${className}`}>
      {label}
    </button>
  );
}

export function TabButton({ className, tabs }: TabButtonProps) {
  const [activeTab, setActiveTab] = useState(0);

  return (
    <div className={styles.container}>
      <div className={styles.tabs}>
        {tabs.map((tab, index) => (
          <button
            key={index}
            className={`${styles.tab} ${
              activeTab === index ? styles.activeTab : ''
            }`}
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
        <button className={styles.primaryButton}>
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

export { tabs };

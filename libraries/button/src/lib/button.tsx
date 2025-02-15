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

// Aggiungiamo gli ID alle sezioni di destinazione
export function ButtonSection() {
  return (
    <div id="button-section">
      <h2>Button Section</h2>
      <Button label="Click Me" />
    </div>
  );
}

export function CardSection() {
  return (
    <div id="card-section">
      <h2>Card Section</h2>
      {/* Contenuto della sezione Card */}
    </div>
  );
}

// Aggiungere altre sezioni simili per Grid, Sidebar, Navbar, Footer
export function GridSection() {
  return (
    <div id="grid-section">
      <h2>Grid Section</h2>
      {/* Contenuto della sezione Grid */}
    </div>
  );
}

export function SidebarSection() {
  return (
    <div id="sidebar-section">
      <h2>Sidebar Section</h2>
      {/* Contenuto della sezione Sidebar */}
    </div>
  );
}

export function NavbarSection() {
  return (
    <div id="navbar-section">
      <h2>Navbar Section</h2>
      {/* Contenuto della sezione Navbar */}
    </div>
  );
}

export function FooterSection() {
  return (
    <div id="footer-section">
      <h2>Footer Section</h2>
      {/* Contenuto della sezione Footer */}
    </div>
  );
}
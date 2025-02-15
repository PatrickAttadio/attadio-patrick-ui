import styles from './header.module.css';
import { useState } from 'react';

export function Header() {
  const [isComponentsMenuOpen, setIsComponentsMenuOpen] = useState(false);

  const toggleComponentsMenu = () => {
    setIsComponentsMenuOpen(!isComponentsMenuOpen);
  };

  return (
    <div className={styles['container']}>
      <div className={styles['header']}>
        <h1>ATTADIO UI</h1>
        <nav>
          <ul>
        <li>Getting Start</li>
        <li onClick={toggleComponentsMenu}>
          Components
          <span className={styles['dropdown-icon']}>▼</span>
          {isComponentsMenuOpen && (
            <ul>
              <li>Button</li>
              <li>Card</li>
              <li>Grid</li>
              <li>Sidebar</li>
              <li>Navbar</li>
              <li>Footer</li>
            </ul>
          )}
        </li>
          </ul>
        </nav>
      </div>
    </div>
  );
}


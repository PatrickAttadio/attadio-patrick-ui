import styles from './header.module.css';
import { useState } from 'react';

export function Header() {
  const [isComponentsMenuOpen, setIsComponentsMenuOpen] = useState(false);

  const toggleComponentsMenu = () => {
    setIsComponentsMenuOpen(!isComponentsMenuOpen);
  };

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
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
                  <li onClick={() => scrollToSection('button-section')}>Button</li>
                  <li onClick={() => scrollToSection('card-section')}>Card</li>
                  <li onClick={() => scrollToSection('grid-section')}>Grid</li>
                  <li onClick={() => scrollToSection('sidebar-section')}>Sidebar</li>
                  <li onClick={() => scrollToSection('navbar-section')}>Navbar</li>
                  <li onClick={() => scrollToSection('footer-section')}>Footer</li>
                </ul>
              )}
            </li>
          </ul>
        </nav>
      </div>
    </div>
  );
}
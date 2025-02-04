import styles from './hero.module.css';

export function Hero() {
  return (
    <div className={styles['container']}>
      <h1>Welcome to Hero!</h1>
    </div>
  );
}

export default Hero;

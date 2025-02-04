import styles from './hero.module.css';

export function Hero() {
  return (
    <div className={styles.container}>
      <p className={styles.tagline}>
        <span>Create Powerful Websites </span>
        <span className={styles.highlight}>Beautifully.</span>
      </p>
      <h1 className={styles.logo}>
        <span className={styles.dynamicText}>ATTADIO UI</span>
      </h1>
      <p className={styles.description}>
        The Best Selling React library based Template
        with <span className={styles.blue}>2000+</span> UI Features.
      </p>
      <div className={styles.buttons}>
        <button className={styles.viewComponents}>View Demos</button>
        <button className={styles.startCreating}>Start Creating</button>
      </div>
      <div className={styles.footer}>
        <span>✔ Ready to Use</span>
        <span>✔ #1 Template of all Time</span>
        <span>✔ Lifetime Free Updates</span>
      </div>
    </div>
  );
}

export default Hero;

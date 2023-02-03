import styles from './page.module.scss';

export default function CannoliPage() {
  return (
    <div>
      <h1>Cannoli</h1>
      <img className={styles.img} src="/cannoli.jpg" alt="cannoli pic" />
    </div>
  );
}

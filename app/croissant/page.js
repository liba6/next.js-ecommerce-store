import styles from './page.module.scss';

export default function CroissantPage() {
  return (
    <div>
      <h1>Croissant</h1>{' '}
      <div className={styles.imgContainer}>
        <img
          className={styles.img}
          src="/croissant.jpg"
          alt="croissant image"
        ></img>
      </div>
    </div>
  );
}

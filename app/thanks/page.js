import styles from './page.module.scss';

export const metadata = {
  title: 'Thanks',
  description: 'This is my thanks page',
};

export default function Thanks() {
  return (
    <div className={styles.div}>
      Thank you for your order! <br /> <br />
      Continue to have a sweet day!
    </div>
  );
}

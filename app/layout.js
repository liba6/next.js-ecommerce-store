import './global.scss';
import Link from 'next/link';
import styles from './layout.module.scss';

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@400;600;700&family=Raleway:wght@300&display=swap"
          rel="stylesheet"
        />
      </head>
      <body>
        <header className={styles.header}>
          <nav>
            <ul>
              <li>
                <Link className={styles.navbar} href="/">
                  INDULGE
                </Link>
              </li>
              <li>
                <Link className={styles.navbar} href="/doughnut">
                  Doughnut
                </Link>
              </li>
              <li>
                <Link className={styles.navbar} href="/croissant">
                  Croissant
                </Link>
              </li>
              <li>
                <Link className={styles.navbar} href="/cupcake">
                  Cupcake
                </Link>
              </li>
              <li>
                <Link className={styles.navbar} href="/cannoli">
                  Cannoli
                </Link>
              </li>
            </ul>
          </nav>
        </header>
        <div className={styles.h1div}>
          <h1> INDULGE</h1>
          <h1> Because you're worth it</h1>
        </div>
        {children}
      </body>
      <footer className={styles.footer}>
        {' '}
        Designed by Liba Shapiro MSc 2023
      </footer>
    </html>
  );
}

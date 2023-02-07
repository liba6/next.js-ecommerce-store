import './global.scss';
import Image from 'next/image';
import Link from 'next/link';
import styles from './layout.module.scss';

export const metadata = {
  title: {
    default: 'Indulge',
    template: '%s | Indulge',
  },
  icons: {
    shortcut: '/favicon.ico',
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@400;600;700&family=Raleway:wght@300&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className={styles.body}>
        <header className={styles.header}>
          <nav>
            <ul>
              <li>
                <Link
                  data-test-id="products-link"
                  className={styles.navbar}
                  href="/"
                >
                  <Image
                    className={styles.image}
                    src="/Indulge.png"
                    alt="indulge logo"
                    width="200"
                    height="200"
                  />
                </Link>
              </li>
              <li>
                <Link
                  data-test-id="product-doughnut"
                  className={styles.navbar}
                  href="/doughnut"
                >
                  Doughnut
                </Link>
              </li>
              <li>
                <Link
                  data-test-id="product-croissant"
                  className={styles.navbar}
                  href="/croissant"
                >
                  Croissant
                </Link>
              </li>
              <li>
                <Link
                  data-test-id="product-cupcake"
                  className={styles.navbar}
                  href="/cupcake"
                >
                  Cupcake
                </Link>
              </li>
              <li>
                <Link
                  className={styles.navbar}
                  data-test-id="product-cannoli"
                  href="/cannoli"
                >
                  Cannoli
                </Link>
              </li>
            </ul>
          </nav>
        </header>
        <div className={styles.h1div}>
          <Image
            className={styles.imagediv}
            src="/pastries.jpg"
            alt="pastries image"
            width="600"
            height="200"
          />
        </div>
        {children}
      </body>
      <footer className={styles.footer}>
        Designed by Liba Shapiro MSc 2023
      </footer>
    </html>
  );
}

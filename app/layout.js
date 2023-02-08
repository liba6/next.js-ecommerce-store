import './global.scss';
import Image from 'next/image';
import Link from 'next/link';
import styles from './layout.module.scss';

export const metadata = {
  title: {
    default: 'Indulge',
    template: '%s | Indulge',
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
                    width="300"
                    height="300"
                  />
                </Link>
              </li>
              <li>
                <Link
                  className={styles.navbar}
                  data-test-id="product-eclair"
                  href="pastries/eclair"
                >
                  Eclair
                </Link>
              </li>
              <li>
                <Link
                  data-test-id="product-cupcake"
                  className={styles.navbar}
                  href="pastries/cupcake"
                >
                  Cupcake
                </Link>
              </li>
              <li>
                <Link
                  data-test-id="product-croissant"
                  className={styles.navbar}
                  href="pastries/croissant"
                >
                  Croissant
                </Link>
              </li>
              <li>
                <Link
                  data-test-id="product-macaroon"
                  className={styles.navbar}
                  href="pastries/macaroon"
                >
                  Macaroon
                </Link>
              </li>
            </ul>
            <span className={styles.cartContainer}>
              <Link
                data-test-id="product-cart"
                className={styles.navbar}
                href="pastries/cart"
              >
                <Image
                  className={styles.cart}
                  src="/cart.png"
                  alt="cart icon"
                  height="100"
                  width="100"
                />
              </Link>
            </span>
          </nav>
        </header>
        <div className={styles.h1div} />
        {children}
      </body>
      <footer className={styles.footer}>
        Designed by Liba Shapiro MSc 2023
      </footer>
    </html>
  );
}

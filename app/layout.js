import './global.scss';
import Image from 'next/image';
import Link from 'next/link';
import CookieBanner from './CookieBanner';
import styles from './layout.module.scss';
import CartCount from './CartCount';
import { getPastries } from '../database/pastries';

export const metadata = {
  title: {
    default: 'Indulge',
    template: '%s | Indulge',
  },
};

export default async function RootLayout({ children }) {
  const pastries = await getPastries();
  // console.log(pastries);
  return (
    <html lang="en">
      <head>
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@400;600;700&family=Raleway:wght@300&display=swap"
          rel="stylesheet"
        />
      </head>
      <CookieBanner />
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
                  data-test-id="products-link"
                  className={styles.products}
                  href="/pastries"
                >
                  P
                </Link>
              </li>
              <li>
                <Link
                  className={styles.navbar}
                  data-test-id="product-eclair"
                  href={`pastries/${pastries[0].id}`}
                >
                  Eclair
                </Link>
              </li>
              <li>
                <Link
                  data-test-id="product-cupcake"
                  className={styles.navbar}
                  href={`pastries/${pastries[2].id}`}
                >
                  Cupcake
                </Link>
              </li>
              <li>
                <Link
                  data-test-id="product-croissant"
                  className={styles.navbar}
                  href={`pastries/${pastries[1].id}`}
                >
                  Croissant
                </Link>
              </li>
              <li>
                <Link
                  data-test-id="product-macaron"
                  className={styles.navbar}
                  href={`pastries/${pastries[3].id}`}
                >
                  Macaron
                </Link>
              </li>
            </ul>
            <span className={styles.cartContainer}>
              <Link
                data-test-id="cart-link"
                className={styles.navbar}
                href="/cart"
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
            <p data-test-id="cart-count" className={styles.cartCount}>
              <CartCount />
            </p>
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

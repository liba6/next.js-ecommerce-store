import Image from 'next/image';
import Link from 'next/link';
import styles from './page.module.scss';

export const metadata = {
  description: 'This is my Home Page',
};

export default function HomePage() {
  return (
    <div className={styles.products}>
      <div>
        <Link href="/pastries/eclair">
          <Image
            src="/eclair.jpg"
            alt="eclair image"
            height="300"
            width="300"
          />
        </Link>
      </div>
      <div>
        <Link href="/pastries/cupcake">
          <Image
            src="/cupcake.jpg"
            alt="cupcake image"
            height="300"
            width="350"
          />
        </Link>
      </div>
      <div>
        <Link data-test-id="product-croissant" href="/pastries/croissant">
          <Image
            src="/croissant.jpg"
            alt="croissant image"
            height="300"
            width="300"
          />
        </Link>
      </div>

      <div>
        <Link href="/pastries/macaroon">
          <Image
            src="/macaroon.jpg"
            alt="macaroon image"
            height="300"
            width="300"
          />
        </Link>
      </div>
    </div>
  );
}

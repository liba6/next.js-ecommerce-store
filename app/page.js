import Image from 'next/image';
import Link from 'next/link';
import styles from './page.module.scss';
import { getPastries } from '../database/pastries';

export const metadata = {
  description: 'This is my Home Page',
};

export default async function HomePage() {
  const pastries = await getPastries();

  return (
    <div className={styles.products}>
      <div>
        <Link href={`pastries/${pastries[0].id}`}>
          <Image
            src="/eclair.jpg"
            alt="eclair image"
            height="300"
            width="300"
          />
        </Link>
      </div>
      <div>
        <Link href={`pastries/${pastries[2].id}`}>
          <Image
            src="/cupcake.jpg"
            alt="cupcake image"
            height="300"
            width="350"
          />
        </Link>
      </div>
      <div>
        <Link
          data-test-id="product-croissant"
          href={`pastries/${pastries[1].id}`}
        >
          <Image
            src="/croissant.jpg"
            alt="croissant image"
            height="300"
            width="300"
          />
        </Link>
      </div>

      <div>
        <Link href={`pastries/${pastries[3].id}`}>
          <Image
            src="/macaron.jpg"
            alt="macaron image"
            height="300"
            width="300"
          />
        </Link>
      </div>
    </div>
  );
}
